import { ButtonColor, ButtonSize } from '@/types/types';
import React, { ChangeEvent, Children, ReactElement } from 'react';
import UiRadio from '../radio/radio';

type UiRadioProps = {
  label?: string;
  value?: string;
  name?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

type UiRadioGroupProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
};

const UiRadioGroup: React.FC<UiRadioGroupProps> = ({ name, children, className }) => {
  const resettingPropsChildrens = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === UiRadio) {
      return React.cloneElement(child as ReactElement<UiRadioProps>, {
        name,
      });
    }
    return child;
  });

  return <div className={className}>{resettingPropsChildrens}</div>;
};

export default UiRadioGroup;
