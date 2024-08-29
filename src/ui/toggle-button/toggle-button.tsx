import { ButtonSize } from '@/types/types';
import { RiAlignLeft } from '@remixicon/react';
import styles from './toggle-button.module.scss';

type UiToggleButtonProps = {
  active?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  divider?: boolean;
  handleClick?: () => void;
};

const UiToggleButton: React.FC<UiToggleButtonProps> = ({
  active = false,
  disabled = false,
  size = 'm',
  divider = true,
  handleClick,
}) => {
  return (
    <div
      className={`${styles.toggleButtonWrapper} ${styles[size]} ${active ? styles.active : ''} ${
        divider ? '' : styles.dividerFalse
      }`}
      onClick={handleClick}
    >
      <RiAlignLeft
        className={styles.icon}
        size={24}
        color={disabled ? 'var(--action-disabled)' : 'var(--text-primary)'}
      />
    </div>
  );
};

export default UiToggleButton;
