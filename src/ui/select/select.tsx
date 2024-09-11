'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import React, { Children, ReactElement, useState } from 'react';
import UiMenuItem, { UiMenuItemProps } from '../menu-item/menu-item';
import UiMenu from '../menu/menu';
import styles from './select.module.scss';

type UiSelectProps = {
  label: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const UiSelect: React.FC<UiSelectProps> = ({ label, children, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [items, setItems] = useState(['hello', 'world', '!!!']);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('changed');
    if (onChange) {
      onChange(event);
    }
  };

  const handleItemClick = (value: string | number) => {
    setSelectedValue(value);
    setIsMenuOpen(false);
  };

  const resettingPropsChildrens = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === UiMenuItem) {
      return React.cloneElement(child as ReactElement<UiMenuItemProps>, {
        onClick: () => handleItemClick(child.props.value),
      });
    }
    return child;
  });

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={handleChange}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        value={selectedValue}
      >
        <option value="" disabled></option>
        {Array.from(items.values()).map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <UiMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
        {resettingPropsChildrens}
      </UiMenu>
      <label className={`${styles.selectLabel} ${selectedValue !== '' ? styles.selected : ''}`}>{label}</label>
      <RiArrowDownSFill size={20} className={styles.arrow} />
    </div>
  );
};

export default UiSelect;
