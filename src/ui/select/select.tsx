'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import React, { Children, ReactElement, useState } from 'react';
import UiMenuItem, { UiMenuItemProps } from '../menu-item/menu-item';
import UiMenu from '../menu/menu';
import styles from './select.module.scss';

type Item = { label: string; value: string | number };

type UiSelectProps = {
  label: string;
  children?: React.ReactNode;
  onChange?: (value: string | number) => void;
};

/**
 * NOTE(hajae)
 * children을 UiMenuItem Component로 받기 때문에 해당 컴포넌트의 props를 가져오는 처리들이 필요
 * 1. label(children), value를 items state에 저장
 * 2. onClick event를 생성
 */
const UiSelect: React.FC<UiSelectProps> = ({ label, children, onChange }) => {
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
      <div className={styles.select} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {item ? item.label : ''}
      </div>
      <UiMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
        {resettingPropsChildrens}
      </UiMenu>
      <label className={`${styles.selectLabel} ${item ? styles.selected : ''}`}>{label}</label>
      <RiArrowDownSFill size={20} className={styles.arrow} />
    </div>
  );
};

export default UiSelect;
