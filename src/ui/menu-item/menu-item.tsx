'use client';
import styles from './menu-item.module.scss';

export type UiMenuItemProps = {
  children: React.ReactNode;
  value?: string | number;
  disabled?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

const UiMenuItem: React.FC<UiMenuItemProps> = ({ value, disabled = false, children, onClick, onClose }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (onClose) onClose();
  };

  return (
    <option className={`${styles.item} ${disabled ? styles.disabled : ''}`} value={value} onClick={handleClick}>
      {children}
    </option>
  );
};

export default UiMenuItem;
