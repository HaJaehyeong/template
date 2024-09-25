import { RemixiconComponentType, RiArrowRightSLine } from '@remixicon/react';
import styles from './list-item.module.scss';

type UiListItemProps = {
  icon?: RemixiconComponentType;
  name: string;
  arrow?: boolean;
  active?: boolean;
};

const UiListItem: React.FC<UiListItemProps> = ({ icon: Icon, name, arrow = false, active = false }) => {
  return (
    <div className={`${styles.listItemWrapper} ${active ? styles.active : ''}`}>
      {Icon && <Icon size={20} color={active ? 'var(--primary-contrast)' : 'var(--text-primary)'} />}
      <span className="body1">{name}</span>
      {arrow && <RiArrowRightSLine className={styles.arrow} />}
    </div>
  );
};

export default UiListItem;
