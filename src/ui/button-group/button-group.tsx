import { ButtonColor, ButtonSize, ButtonVariant } from '@/types/types';
import UiButton from '@/ui/button/button';
import React, { Children, ReactElement } from 'react';
import styles from './button-group.module.scss';

type UiButtonProps = {
  value?: string | React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  leftIcon?: boolean;
  rightIcon?: boolean;
  fabExtended?: boolean;
  fabRound?: boolean;
  star?: boolean;
};

type UiButtonGroupProps = {
  children: React.ReactNode;
  type?: 'horizontal' | 'vertical';
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
};

const UiButtonGroup: React.FC<UiButtonGroupProps> = ({
  children,
  type = 'horizontal',
  variant = 'contained',
  color = 'primary',
  size = 'm',
}) => {
  const variantClass = styles[variant];
  const colorClass = styles[color];

  const resettingPropsChildrens = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === UiButton) {
      return React.cloneElement(child as ReactElement<UiButtonProps>, {
        variant,
        size,
        color,
        fabExtended: false,
        fabRound: false,
        star: false,
      });
    }
    return child;
  });

  return (
    <div
      className={`${
        type === 'horizontal' ? styles.buttonGroupWrapper : styles.buttonVerticalGroupWrapper
      } ${colorClass} ${variantClass} ${variant === 'contained' ? 'shadow3' : ''}`}
    >
      {resettingPropsChildrens}
    </div>
  );
};

export default UiButtonGroup;
