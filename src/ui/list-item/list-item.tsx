import { RemixiconComponentType, RiArrowRightSLine } from '@remixicon/react';
import styles from './list-item.module.scss';

type UiListItemProps = {
  icon?: RemixiconComponentType;
  name: string;
  arrow?: boolean;
};

const UiListItem: React.FC<UiListItemProps> = ({ icon: Icon, name, arrow = false }) => {
  return (
    <div className={styles.listItemWrapper}>
      {Icon && <Icon size={20} color="var(--text-primary)" />}
      <span className="body1">{name}</span>
      {arrow && <RiArrowRightSLine className={styles.arrow} />}
    </div>
  );
};

export default UiListItem;
