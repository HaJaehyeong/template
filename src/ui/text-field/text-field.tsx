import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import styles from './text-field.module.scss';

type UiTextFieldProps = {
  label: string;
  variant?: 'standard' | 'outline' | 'filed'; // NOTE(hajae): Style Guide에 filed라고 적혀있어서 filed로 설정했는데 field가 아닐까..
  fieldSize?: 's' | 'm';
  helperText?: string;
  isError?: boolean;
  disabled?: boolean;
  defaultValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const UiTextField: React.FC<UiTextFieldProps> = ({
  label,
  variant = 'standard',
  fieldSize = 'm',
  isError = false,
  disabled = false,
  defaultValue = '',
  helperText,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    value !== '' ? setActive(true) : setActive(false);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={styles.textFieldWrapper}>
      <fieldset
        className={`${styles.input} ${styles[variant]} ${styles[fieldSize]} ${focused ? styles.focused : ''} 
          ${isError ? styles.error : ''}`}
      >
        <legend style={{ maxWidth: value ? '100%' : '0', padding: value ? '' : '0', transition: 'all 0.2s ease' }}>
          {label}
        </legend>
        <label
          className={`${styles.label} ${styles[variant]} ${styles[fieldSize]} 
            ${active ? styles.active : ''} ${focused ? styles.focused : ''} 
            ${isError ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
        >
          {label}
        </label>
        <input
          type="text"
          value={value}
          className={`${styles[variant]} ${styles[fieldSize]} ${active ? styles.active : ''}`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
      </fieldset>
      {helperText && (
        <div className={`${styles.helperText} ${styles[variant]} ${styles[fieldSize]} ${isError ? styles.error : ''}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default UiTextField;
