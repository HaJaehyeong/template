import { ButtonSize } from '@/types/types';
import { useEffect, useRef, useState } from 'react';
import styles from './slider.module.scss';

type UiSliderProps = {
  variant?: 'default' | 'discrete' | 'range';
  size?: ButtonSize;
  value: number | { min: number; max: number };
  min?: number;
  max?: number;
  step?: number;
  minGap?: number; // NOTE(hajae): 두 slider thumb의 차이의 최솟값 (variant가 'range'일 경우에만 동작)
  disabled?: boolean;
  withLabel?: boolean;
  onChange: (newValue: { min: number; max: number }) => void;
};

const UiSlider: React.FC<UiSliderProps> = ({
  variant = 'default',
  min = 0,
  max = 100,
  step = 0,
  minGap = 0,
  value,
  onChange,
}) => {
  const rangeLeftRef = useRef<HTMLInputElement>(null);
  const rangeRightRef = useRef<HTMLInputElement>(null);
  const thumbLeftRef = useRef<HTMLDivElement>(null);
  const thumbRightRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);
  const [leftValue, setLeftValue] = useState<number>(typeof value === 'number' ? min : value.min);
  const [rightValue, setRightValue] = useState<number>(
    typeof value === 'number' ? value : max < value.max ? max : value.max
  );

  const [marks, setMarks] = useState<JSX.Element[]>([]);

  const updateRangeStyles = () => {
    if (
      rangeLeftRef.current &&
      rangeRightRef.current &&
      thumbLeftRef.current &&
      thumbRightRef.current &&
      rangeRef.current
    ) {
      const refMin = +rangeLeftRef.current.min;
      const refMax = +rangeLeftRef.current.max;
      const leftPercent = ((leftValue - refMin) / (refMax - refMin)) * 100;
      const rightPercent = ((rightValue - refMin) / (refMax - refMin)) * 100;

      thumbLeftRef.current.style.left = `${leftPercent}%`;
      thumbRightRef.current.style.left = `${rightPercent}%`;
      rangeRef.current.style.left = `${leftPercent}%`;
      rangeRef.current.style.width = `${rightPercent - leftPercent + 1}%`;
    }
  };

  useEffect(() => {
    updateRangeStyles();
    if (variant !== 'default') generateMarks();
  }, [leftValue, rightValue]);

  const handleLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(+event.target.value, rightValue - (variant === 'range' ? minGap : 0));
    setLeftValue(newValue);
    onChange({ min: newValue, max: rightValue });
  };

  const handleRightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(+event.target.value, leftValue + (variant === 'range' ? minGap : 0));
    setRightValue(newValue);
    onChange({ min: leftValue, max: newValue });
  };

  const generateMarks = () => {
    const markElements = [];
    const stepValue = step || 10;

    for (let i = min, j = 0; i <= max; i += stepValue, j++) {
      const percent = (100 / ((max - min) / stepValue)) * j;
      const isActive = i >= leftValue && i <= rightValue;

      markElements.push(
        <span
          key={`mark-${i}`}
          className={`${styles.discrete} ${isActive ? styles.active : ''}`}
          style={{ left: `${percent}%` }}
        />
      );
    }

    setMarks(markElements);
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        ref={rangeLeftRef}
        className={`${styles.rangeInput} ${variant === 'range' ? '' : styles.hide}`}
        type="range"
        min={min}
        max={max}
        value={leftValue}
        onChange={handleLeftChange}
      />
      <input
        ref={rangeRightRef}
        className={styles.rangeInput}
        type="range"
        min={min}
        max={max}
        step={step}
        value={rightValue}
        onChange={handleRightChange}
      />
      <div className={styles.track}>
        <div ref={rangeRef} className={styles.range} />
        <div
          ref={thumbLeftRef}
          className={`${styles.thumb} ${styles.left} ${variant === 'range' ? '' : styles.hide}`}
        ></div>
        <div ref={thumbRightRef} className={`${styles.thumb} ${styles.right}`}></div>
        {variant !== 'default' && marks}
      </div>
    </div>
  );
};

export default UiSlider;
