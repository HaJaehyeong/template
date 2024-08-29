import { ButtonSize } from '@/types/types';
import React, { Children, ReactElement } from 'react';
import UiToggleButton from '../toggle-button/toggle-button';
import styles from './toggle-button-group.module.scss';

type UiToggleButtonProps = {
  active?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  divider?: boolean;
};

type UiToogleButtonGroupProps = {
  size?: ButtonSize;
  children: React.ReactNode;
};

const UiToggleButtonGroup: React.FC<UiToogleButtonGroupProps> = ({ size = 'm', children }) => {
  const resettingPropsChildrens = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === UiToggleButton) {
      return React.cloneElement(child as ReactElement<UiToggleButtonProps>, {
        size,
      });
    }
    return child;
  });

  return <div className={styles.toggleButtonGroupWrapper}>{resettingPropsChildrens}</div>;
};

export default UiToggleButtonGroup;
