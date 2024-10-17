import { ButtonSize } from '@/types/types';
import { RemixiconComponentType, RiAlignLeft } from '@remixicon/react';
import styles from './toggle-button.module.scss';

type UiToggleButtonProps = {
  active?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  divider?: boolean;
  icon?: RemixiconComponentType;
  onClick?: () => void;
};

const UiToggleButton: React.FC<UiToggleButtonProps> = ({
  active = false,
  disabled = false,
  size = 'm',
  divider = true,
  icon: Icon = RiAlignLeft,
  onClick,
}) => {
  return (
    <div
      className={`${styles.toggleButtonWrapper} ${styles[size]} ${active ? styles.active : ''} ${
        divider ? '' : styles.dividerFalse
      } ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      <Icon className={styles.icon} size={24} color={disabled ? 'var(--action-disabled)' : 'var(--text-primary)'} />
    </div>
  );
};

export default UiToggleButton;
