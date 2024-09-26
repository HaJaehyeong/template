'use client';
import { RiArrowRightDoubleLine } from '@remixicon/react';
import { useState } from 'react';
import ExampleWrapper from '../example-warpper/example-wrapper';

type UiComponentsWrapperProps = {
  children: React.ReactNode;
  exampleChildren: React.ReactNode;
};

const UiComponentsWrapper: React.FC<UiComponentsWrapperProps> = ({ children, exampleChildren }) => {
  const [isExampleOpen, setIsExampleOpen] = useState(false);
  const handleExampleToggle = () => setIsExampleOpen(!isExampleOpen);

  return (
    <div className="ui-component-page-wrapper">
      <div className="sample-wrapper paper elevated square-false">
        <div className="example-button" onClick={handleExampleToggle}>
          Example <RiArrowRightDoubleLine />
        </div>
        {children}
      </div>
      <ExampleWrapper open={isExampleOpen}>{exampleChildren}</ExampleWrapper>
    </div>
  );
};

export default UiComponentsWrapper;
