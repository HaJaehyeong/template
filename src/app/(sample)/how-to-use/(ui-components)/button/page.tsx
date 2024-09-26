'use client';
import { RiArrowRightDoubleLine } from '@remixicon/react';
import { useState } from 'react';
import ButtonSample from '../_components/button-sample/button-sample';
import ExampleWrapper from '../_components/example-warpper/example-wrapper';
import styles from './page.module.scss';

const ButtonPage: React.FC = () => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const handleExampleToggle = () => setIsExampleOpen(!isExampleOpen);

  return (
    <div className="ui-component-page-wrapper">
      <div className="sample-wrapper paper elevated square-false">
        <div className={styles.exampleButton} onClick={handleExampleToggle}>
          Example <RiArrowRightDoubleLine />
        </div>
        <ButtonSample />
      </div>
      <ExampleWrapper open={isExampleOpen} />
    </div>
  );
};

export default ButtonPage;
