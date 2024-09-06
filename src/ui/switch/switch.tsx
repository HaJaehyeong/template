'use client';
import { ButtonColor } from '@/types/types';
import { useState } from 'react';
import styles from './switch.module.scss';

type UiSwitchProps = {
  checked?: boolean;
  color?: ButtonColor | 'inactive';
  size?: 's' | 'm';
  label?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UiSwitch: React.FC<UiSwitchProps> = ({
  checked = false,
  color = 'primary',
  size = 'm',
  label = '',
  disabled = false,
  onChange,
}) => {
  const [toggle, setToggle] = useState(checked);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`${styles.switchWrapper} ${styles[size]}`}>
      <input
        type="checkbox"
        className={`${styles.toggle} ${styles[color]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
        checked={toggle}
        onClick={() => (disabled ? {} : setToggle(!toggle))}
        onChange={handleToggle}
      />
      <div
        className={`${styles.switch} ${styles[color]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
        onClick={() => (disabled ? {} : setToggle(!toggle))}
      />
      {label && <span className={disabled ? styles.disabled : ''}>{label}</span>}
    </div>
  );
};

export default UiSwitch;
