import { CSSProperties, useEffect, useRef, useState } from 'react';

type UiSliderProps = {
  max: number;
  value: number;
  onChange: (newValue: number) => void;
};

const UiSlider: React.FC<UiSliderProps> = ({ max, value, onChange }) => {
  const [sliderThumb, setSliderThumb] = useState((value / max) * 100);
  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    const progressElement = progressRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (progressElement) {
        const rect = progressElement.getBoundingClientRect();
        const newValue = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
        const newPercentage = (newValue / rect.width) * 100;
        setSliderThumb(newPercentage);
        onChange(Math.round((newPercentage / 100) * max));
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    if (progressElement) {
      progressElement.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (progressElement) {
        progressElement.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [max, onChange]);

  useEffect(() => {
    setSliderThumb((value / max) * 100);
  }, [value, max]);

  return (
    <progress
      ref={progressRef}
      max={max}
      value={sliderThumb}
      style={{ '--thumb-position': `calc(${sliderThumb}% - 10px)` } as CSSProperties}
    />
  );
};

export default UiSlider;
