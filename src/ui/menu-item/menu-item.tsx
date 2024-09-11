import styles from './menu-item.module.scss';

export type UiMenuItemProps = {
  children: React.ReactNode;
  value?: string | number;
  disabled?: boolean;
  onClick?: () => void;
};

const UiMenuItem: React.FC<UiMenuItemProps> = ({ value, disabled = false, children, onClick }) => {
  return (
    <option className={`${styles.item} ${disabled ? styles.disabled : ''}`} value={value} onClick={onClick}>
      {children}
    </option>
  );
};

export default UiMenuItem;
