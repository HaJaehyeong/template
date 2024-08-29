'use client';
import { ButtonColor, ButtonSize } from '@/types/types';
import { RiArrowDownSFill } from '@remixicon/react';
import { useState } from 'react';
import UiButton from '../button/button';
import UiMenu from '../menu/menu';
import styles from './button-group-split.module.scss';

type UiButtonGroupSplitProps = {
  value: string;
  type?: 'horizontal' | 'vertical';
  size?: ButtonSize;
  variant?: 'default' | 'outlined';
  color?: ButtonColor;
  children: React.ReactNode;
};

const UiButtonGroupSplit: React.FC<UiButtonGroupSplitProps> = ({
  value,
  type = 'horizontal',
  size = 'm',
  variant = 'default',
  color = 'primary',
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconSize = size === 's' ? 14 : size === 'm' ? 16 : 18;

  return (
    <div
      className={`${type === 'horizontal' ? styles.buttonGroupSplitWrapper : styles.buttonVerticalGroupSplitWrapper} 
      ${variant === 'outlined' ? styles.outlined : ''} 
      ${styles[size]} 
      ${styles[color]}
      `}
    >
      <UiButton value={value} size={size} variant={variant === 'default' ? 'contained' : 'outlined'} color={color} />
      <UiMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
        {children}
      </UiMenu>
      <UiButton
        value={<RiArrowDownSFill size={iconSize} />}
        size={size}
        variant={variant === 'default' ? 'contained' : 'outlined'}
        color={color}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
};

export default UiButtonGroupSplit;
