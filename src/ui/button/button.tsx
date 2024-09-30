'use client';
import { ButtonColor, ButtonSize, ButtonVariant } from '@/types/types';
import { RiAddLine, RiArrowLeftLine, RiArrowRightLine, RiStarFill } from '@remixicon/react';
import styles from './button.module.scss';

type UiButtonProps = {
  value?: string | React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;

  // NOTE(hajae): button Type (중복시 위 아래 순서대로 가장 위 버튼으로 표시)
  leftIcon?: boolean;
  rightIcon?: boolean;
  fabExtended?: boolean;
  fabRound?: boolean;
  star?: boolean;
  width?: number;
  style?: React.CSSProperties;
};

const UiButton: React.FC<UiButtonProps> = ({
  value = '',
  variant = 'contained',
  color = 'primary',
  size = 'm',
  disabled = false,
  onClick,
  leftIcon = false,
  rightIcon = false,
  fabExtended = false,
  fabRound = false,
  star = false,
  width,
  style,
}) => {
  // NOTE(hajae): 중복시 우선순위가 높은 Type만 실행
  const selectButtonType = () => {
    if (leftIcon) {
      rightIcon = fabExtended = fabRound = star = false;
    } else if (rightIcon) {
      leftIcon = fabExtended = fabRound = star = false;
    } else if (fabExtended) {
      leftIcon = rightIcon = fabRound = star = false;
    } else if (fabRound) {
      leftIcon = rightIcon = fabExtended = star = false;
    } else if (star) {
      leftIcon = rightIcon = fabExtended = fabRound = false;
    }
  };
  selectButtonType();

  const variantClass = styles[variant];
  const colorClass = styles[color];
  const sizeClass = styles[size];

  const boxShadow =
    !disabled && (fabExtended || fabRound ? 'shadow5' : variant === 'contained' && !star ? 'shadow3' : '');
  const btnSize = size === 's' ? 'button-small' : size === 'm' ? 'button-medium' : 'button-large';
  const arrowSize = fabRound ? 25 : size === 's' ? 16 : size === 'm' ? 18 : 20;
  const starSize = size === 's' ? 20 : size === 'm' ? 24 : 35;

  const classes = [
    styles.btn,
    variantClass,
    colorClass,
    sizeClass,
    boxShadow,
    fabExtended && styles.fabExtended,
    fabRound && styles.fabRound,
    star && styles.star,
    btnSize,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style, width: width ? width + 'px' : '' }}
    >
      {leftIcon && <RiArrowLeftLine size={arrowSize} style={{ marginLeft: '-5px' }} />}
      {fabExtended && <RiAddLine size={20} style={{ marginLeft: '-5px' }} />}
      {fabRound && <RiAddLine size={25} style={{ position: 'absolute' }} />}
      {star && (
        <RiStarFill
          size={starSize}
          color={!disabled ? `var(--${color}-main` : 'var(--action-disabled)'}
          style={{ position: 'absolute' }}
        />
      )}
      {!fabRound && !star && value}
      {rightIcon && <RiArrowRightLine size={arrowSize} style={{ marginRight: '-5px' }} />}
    </button>
  );
};

export default UiButton;
