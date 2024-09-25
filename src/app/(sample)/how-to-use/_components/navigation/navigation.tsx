'use client';
import { NAVIGATION_LIST, NAVIGATION_MAIN } from '@/types/constants';
import UiListItem from '@/ui/list-item/list-item';
import UiListSubheader from '@/ui/list-subheader/list-subheader';
import { RiEmojiStickerFill } from '@remixicon/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationTitle}>
        <RiEmojiStickerFill size={24} />
        <span>Template</span>
      </div>

      <UiListSubheader title="APPS & PAGES" />

      <Link href={NAVIGATION_MAIN.path}>
        <UiListItem
          icon={NAVIGATION_MAIN.icon}
          name={NAVIGATION_MAIN.name}
          active={NAVIGATION_MAIN.path === pathName}
        />
      </Link>
      <UiListSubheader title="UI Components" />
      {NAVIGATION_LIST.map((item, index) => (
        <Link href={item.path} key={item.name + index}>
          <UiListItem icon={item.icon} name={item.name} active={item.path === pathName} arrow />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
