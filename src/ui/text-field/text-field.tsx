'use client';
import { RemixiconComponentType } from '@remixicon/react';
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import styles from './text-field.module.scss';

type UiTextFieldProps = {
  label: string;
  type?: 'text' | 'password';
  variant?: 'standard' | 'outline' | 'filed'; // NOTE(hajae): Style Guide에 filed라고 적혀있어서 filed로 설정했는데 field가 아닐까..
  fieldSize?: 's' | 'm';
  width?: number;
  helperText?: string;
  isError?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  fieldPrefix?: React.ReactNode | string;
  fieldSuffix?: React.ReactNode | string;
} & InputHTMLAttributes<HTMLInputElement>;

const UiTextField: React.FC<UiTextFieldProps> = ({
  label,
  type = 'text',
  variant = 'standard',
  fieldSize = 'm',
  width = 220,
  isError = false,
  disabled = false,
  defaultValue = '',
  helperText,
  fieldPrefix,
  fieldSuffix,
  onChange,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    value !== '' || fieldSuffix || fieldPrefix ? setActive(true) : setActive(false);
  }, [value, fieldSuffix, fieldPrefix]);

  const renderPrefix = () => {
    if (typeof fieldPrefix === 'function') {
      const Icon = fieldPrefix as RemixiconComponentType;
      return <Icon />;
    }
    return fieldPrefix;
  };

  const renderSuffix = () => {
    if (typeof fieldSuffix === 'function') {
      const Icon = fieldSuffix as RemixiconComponentType;
      return <Icon />;
    }
    return fieldSuffix;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    setValue(event.target.value);
  };
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={styles.textFieldWrapper} style={{ width: width + 'px', minWidth: width + 'px' }}>
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '5px' }}>
          {fieldPrefix && <div className={`${styles.prefix} ${styles[variant]}`}>{renderPrefix()}</div>}
          <input
            type={type}
            value={value}
            className={`${styles[variant]} ${styles[fieldSize]} ${active ? styles.active : ''}`}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            autoComplete="new-password"
            {...props}
          />
          {fieldSuffix && <div className={`${styles.suffix} ${styles[variant]}`}>{renderSuffix()}</div>}
        </div>
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
