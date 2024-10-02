import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import UiMenuItem, { UiMenuItemProps } from '../menu-item/menu-item';
import styles from './menu.module.scss';

type UiMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const UiMenu: React.FC<UiMenuProps> = ({ isOpen, onClose, children }) => {
  const [position, setPosition] = useState<'top' | 'bottom' | 'top-left' | 'bottom-left'>('bottom');

  const menuRef = useRef<HTMLDivElement>(null);

  // NOTE(hajae): useEffect를 사용할 경우 한번 Mount가 되고 아래 포지션 계산하기 때문에
  // 계산 직전 짧게 표시하려는 Position이 아닌 깜빡임이 발생할 수 있기 때문에 useLayoutEffect를 사용
  useLayoutEffect(() => {
    if (isOpen && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      if (menuRect.bottom > viewportHeight && menuRect.height <= menuRect.top) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }

      if (menuRect.x + menuRect.width > viewportWidth) {
        setPosition((prev) => (prev + '-left') as 'top' | 'bottom' | 'top-left' | 'bottom-left');
      }
    } else {
      setPosition('bottom');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const addOnCloseEventInChildrens = () => {
    return Children.map(children, (child) =>
      isValidElement(child) && child.type === UiMenuItem
        ? cloneElement(child as ReactElement<UiMenuItemProps>, { onClose })
        : child
    );
  };

  return isOpen ? (
    <>
      <div className={styles.menuBackground} onClick={onClose} />
      <div
        ref={menuRef}
        className={`${styles.menuWrapper} ${position ? styles[position] : ''} ${
          isOpen ? styles.open : ''
        } popover square-false shadow8`}
      >
        {addOnCloseEventInChildrens()}
      </div>
    </>
  ) : null;
};

export default UiMenu;
