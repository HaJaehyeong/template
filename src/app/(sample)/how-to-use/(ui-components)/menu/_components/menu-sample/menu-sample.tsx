'use client';
import UiButton from '@/ui/button/button';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiMenu from '@/ui/menu/menu';
import { memo, useState } from 'react';
import styles from './menu-sample.module.scss';

const MenuSample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <h4>Samples</h4>
        <h5>with UiButton</h5>
        <div className={styles.samples}>
          <div className={styles.item}>
            <div className={styles.menuWrapper}>
              <UiButton value={isOpen ? 'Opend' : 'Closed'} onClick={() => setIsOpen(true)} />
              <UiMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <UiMenuItem>First Item</UiMenuItem>
                <UiMenuItem>Second Item</UiMenuItem>
              </UiMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(MenuSample);
