'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import React, { Children, ReactElement, useEffect, useMemo, useState } from 'react';
import UiMenuItem, { UiMenuItemProps } from '../menu-item/menu-item';
import UiMenu from '../menu/menu';
import styles from './select.module.scss';

type Item = { label: string; value: string | number };

type UiSelectProps = {
  label: string;
  variant?: 'standard' | 'outline' | 'filed'; // NOTE(hajae): Style Guide에 filed라고 적혀있어서 filed로 설정했는데 field가 아닐까..
  size?: 's' | 'm';
  isError?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  children?: React.ReactNode;
  helperText?: string;
  onChange?: (value: string | number) => void;
};

/**
 * NOTE(hajae)
 * children을 UiMenuItem Component로 받기 때문에 해당 컴포넌트의 props를 가져오는 처리들이 필요
 * 1. UiMenuItem으로 Item List를 생성
 * 2. Default Value prop가 존재하면 Item List에서 찾아서 SET
 * 3. onClick event를 생성
 */
const UiSelect: React.FC<UiSelectProps> = ({
  label,
  variant = 'standard',
  size = 'm',
  isError = false,
  disabled = false,
  defaultValue,
  children,
  helperText,
  onChange,
}) => {
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NOTE(hajae): UiMenuItem의 Props를 이용해서 ItemList를 생성
  const items = useMemo(() => {
    const itemList: Item[] = [];
    Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === UiMenuItem) {
        const label = child.props.children as string;
        const value = child.props.value;
        itemList.push({ label, value });
      }
    });
    return itemList;
  }, [children]);

  // NOTE(hajae): defaultValue props가 있을 때 ItemList에서 찾아서 SET
  useEffect(() => {
    if (defaultValue) {
      const defaultItem = items.find((item) => item.value === defaultValue);
      if (defaultItem) setItem(defaultItem);
    }
  }, [defaultValue, items]);

  const handleItemClick = (selectedItem: Item) => {
    setItem(selectedItem);
    setIsMenuOpen(false);
    if (onChange) {
      onChange(selectedItem.value);
    }
  };

  // NOTE(hajae): UiMenuItem Components에 onClick Event를 추가
  const renderChildrenWithOnClickEvent = useMemo(
    () =>
      Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === UiMenuItem) {
          return React.cloneElement(child as ReactElement<UiMenuItemProps>, {
            onClick: () => handleItemClick({ label: child.props.children as string, value: child.props.value }),
          });
        }
        return child;
      }),
    [children]
  );

  return (
    <div className={`${styles.selectContainer} ${disabled ? styles.disabled : ''}`}>
      <fieldset
        className={`${styles.select} ${styles[variant]} ${styles[size]} ${isMenuOpen ? styles.active : ''} 
          ${isError ? styles.error : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <legend style={{ maxWidth: item ? '100%' : '0', padding: item ? '' : '0' }}>{label}</legend>
        <div
          className={`${styles.item} ${styles[variant]} ${item ? styles.selected : ''} 
            ${disabled ? styles.disabled : ''}`}
        >
          {item ? item.label : ''}
        </div>
        <label
          className={`${styles.selectLabel} ${styles[variant]} ${styles[size]}
           ${item ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
        >
          {label}
        </label>
        <RiArrowDownSFill
          size={20}
          className={`${styles.arrow} ${styles[variant]} ${styles[size]} ${item ? styles.selected : ''}`}
        />
      </fieldset>
      <UiMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
        {renderChildrenWithOnClickEvent}
      </UiMenu>
      {helperText && <div className={`${styles.helperText} ${styles[variant]} ${styles[size]}`}>{helperText}</div>}
    </div>
  );
};

export default UiSelect;
