'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import React, { Children, ReactElement, useState } from 'react';
import UiMenuItem, { UiMenuItemProps } from '../menu-item/menu-item';
import UiMenu from '../menu/menu';
import styles from './select.module.scss';

type Item = { label: string; value: string | number };

type UiSelectProps = {
  label: string;
  variant?: 'standard' | 'outline' | 'filed';
  children?: React.ReactNode;
  helperText?: string;
  onChange?: (value: string | number) => void;
};

/**
 * NOTE(hajae)
 * children을 UiMenuItem Component로 받기 때문에 해당 컴포넌트의 props를 가져오는 처리들이 필요
 * 1. label(children), value를 items state에 저장
 * 2. onClick event를 생성
 */
const UiSelect: React.FC<UiSelectProps> = ({ label, variant = 'standard', children, helperText, onChange }) => {
  const [item, setItem] = useState<Item>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (selectedItem: Item) => {
    setItem(selectedItem);
    setIsMenuOpen(false);
    if (onChange) {
      onChange(selectedItem.value);
    }
  };

  const resettingPropsChildrens = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === UiMenuItem) {
      return React.cloneElement(child as ReactElement<UiMenuItemProps>, {
        onClick: () =>
          handleItemClick({ label: child.props.children as string, value: child.props.value as string | number }),
      });
    }
    return child;
  });

  return (
    <div className={styles.selectContainer}>
      <fieldset className={`${styles.select} ${styles[variant]}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <legend style={{ maxWidth: item ? '100%' : '0', padding: item ? '' : '0' }}>{label}</legend>
        <div className={`${styles.item} ${styles[variant]} ${item ? styles.selected : ''}`}>
          {item ? item.label : ''}
        </div>
        <label className={`${styles.selectLabel} ${styles[variant]} ${item ? styles.selected : ''}`}>{label}</label>
        <RiArrowDownSFill size={20} className={`${styles.arrow} ${styles[variant]} ${item ? styles.selected : ''}`} />
      </fieldset>
      <UiMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
        {resettingPropsChildrens}
      </UiMenu>
      {helperText && <div className={`${styles.helperText} ${styles[variant]}`}>{helperText}</div>}
    </div>
  );
};

export default UiSelect;
