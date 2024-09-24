import { RemixiconComponentType } from '@remixicon/react';
import styles from './list-item.module.scss';

type UiListItemProps = {
  icon?: RemixiconComponentType;
  name: string;
};

const UiListItem: React.FC<UiListItemProps> = ({ icon: Icon, name }) => {
  return (
    <div className={styles.listItemWrapper}>
      {Icon && <Icon size={20} color="var(--text-primary)" />}
      <span className="body1">{name}</span>
    </div>
  );
};

export default UiListItem;
