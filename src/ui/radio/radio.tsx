'use client';
import { ButtonColor, ButtonSize } from '@/types/types';
import { ChangeEvent } from 'react';
import styles from './radio.module.scss';

type UiRadioProps = {
  label?: string;
  value?: string;
  name?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const UiRadio: React.FC<UiRadioProps> = ({
  label,
  value,
  name,
  color = 'primary',
  size = 'm',
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <div className={styles.radioWrapper}>
      <div className={`${styles.radio} ${styles[color]} ${styles[size]}  ${disabled ? styles.disabled : ''}`}>
        <input
          className={`${color} ${size}`}
          value={value}
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange ? onChange : () => {}}
          disabled={disabled}
        />
      </div>
      {label && <label className={disabled ? styles.labelDisabled : ''}>{label}</label>}
    </div>
  );
};

export default UiRadio;
