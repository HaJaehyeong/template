import styles from './menu-item.module.scss';

type UiMenuItemProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const UiMenuItem: React.FC<UiMenuItemProps> = ({ disabled = false, children }) => {
  return <div className={`${styles.item} ${disabled ? styles.disabled : ''}`}>{children}</div>;
};

export default UiMenuItem;
