'use client';
import { ButtonColor, ButtonSize } from '@/types/types';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './checkbox.module.scss';

type UiCheckBoxProps = {
  label?: string;
  value?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const UiCheckBox: React.FC<UiCheckBoxProps> = ({
  label,
  value,
  color = 'primary',
  size = 'm',
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
}) => {
  const [check, setCheck] = useState(checked);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (check && indeterminate && checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    } else if (!check && indeterminate && checkboxRef.current) {
      checkboxRef.current.indeterminate = !indeterminate;
    }
  }, [check]);

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    if (onChange) onChange(event);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <div className={styles.checkboxWrapper}>
      <div className={`${styles.checkbox} ${styles[color]} ${styles[size]}  ${disabled ? styles.disabled : ''}`}>
        <input
          ref={checkboxRef}
          className={`${color} ${size}`}
          value={value}
          name=""
          type="checkbox"
          checked={check}
          onChange={handleCheckbox}
          disabled={disabled}
        />
      </div>
      {label && <label className={disabled ? styles.labelDisabled : ''}>{label}</label>}
    </div>
  );
};

export default UiCheckBox;
