'use client';
import { NAVIGATION_LIST, NAVIGATION_MAIN } from '@/types/constants';
import UiListItem from '@/ui/list-item/list-item';
import UiListSubheader from '@/ui/list-subheader/list-subheader';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className={styles.navigationWrapper}>
      <UiListSubheader title="APPS & PAGES" />
      <UiListItem icon={NAVIGATION_MAIN.icon} name={NAVIGATION_MAIN.name} active={NAVIGATION_MAIN.path === pathName} />
      <UiListSubheader title="UI Components" />
      {NAVIGATION_LIST.map((item, index) => (
        <Link href={item.path}>
          <UiListItem key={item.name + index} icon={item.icon} name={item.name} active={item.path === pathName} arrow />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
