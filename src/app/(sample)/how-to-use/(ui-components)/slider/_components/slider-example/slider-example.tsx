'use client';
import UiSlider from '@/ui/slider/slider';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const SliderProps = [
  {
    Name: 'variant',
    Type: "'default' | 'discrete' | 'range'",
    Default: 'default',
    Description: 'Slider의 타입',
  },
  {
    Name: 'color',
    Type: "'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'",
    Default: 'primary',
    Description: 'Slider의 색상',
  },
  {
    Name: 'size',
    Type: "'s' | 'm'",
    Default: 'm',
    Description: 'Slider의 크기',
  },
  {
    Name: 'value',
    Type: 'number | { min: number; max: number }',
    Default: '-',
    Description: 'Slider의 값',
  },
  {
    Name: 'min',
    Type: 'number',
    Default: '0',
    Description: 'Slider의 최소값',
  },
  {
    Name: 'max',
    Type: 'number',
    Default: '100',
    Description: 'Slider의 최대값',
  },
  {
    Name: 'step',
    Type: 'number',
    Default: '0',
    Description: 'Slider Thumb가 한번에 움직일 수 있는 간격',
  },
  {
    Name: 'minGap',
    Type: 'number',
    Default: '0',
    Description: "두 Slider Thumb의 간격의 최소값 (variant가 'range'일 경우에만 동작)",
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'Slider를 비활성화 여부',
  },
  {
    Name: 'valueTooltipDisplay',
    Type: 'boolean',
    Default: 'false',
    Description: 'Slider Thumb의 Value Tooltip 표시 여부',
  },
  {
    Name: 'valueLabelDisplay',
    Type: 'boolean',
    Default: 'false',
    Description: 'Slider Thumb의 Value Label 표시 여부',
  },
  {
    Name: 'onChange',
    Type: '(newValue: { min: number; max: number }) => void',
    Default: '-',
    Description: 'Slider Thumb의 값이 변경될 때 호출되는 함수',
  },
];

const comment = `
  없음!!
`;

const SliderExample: React.FC = () => {
  const [volume, setVolume] = useState(10);
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
  };

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Variant"
        code={`<UiSlider value={50} />\n<UiSlider value={50} variant="discrete" />\n<UiSlider value={{ min: 40, max: 60 }} variant="range" />`}
        result={
          <div style={style}>
            <UiSlider value={50} />
            <UiSlider value={50} variant="discrete" />
            <UiSlider value={{ min: 40, max: 60 }} variant="range" />
          </div>
        }
      />
      <ExampleContent
        title="Color"
        code={`<UiSlider value={50} color="primary" />\n<UiSlider value={50} color="secondary" />\n<UiSlider value={50} color="info" />\n<UiSlider value={50} color="success" />\n<UiSlider value={50} color="warning" />\n<UiSlider value={50} color="error" />`}
        result={
          <div style={style}>
            <UiSlider value={50} color="primary" />
            <UiSlider value={50} color="secondary" />
            <UiSlider value={50} color="info" />
            <UiSlider value={50} color="success" />
            <UiSlider value={50} color="warning" />
            <UiSlider value={50} color="error" />
          </div>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiSlider value={50} size="s" />\n<UiSlider value={50} size="s" variant="discrete" />\n<UiSlider value={{ min: 40, max: 60 }} variant="range" size="s" />`}
        result={
          <div style={style}>
            <UiSlider value={50} size="s" />
            <UiSlider value={50} size="s" variant="discrete" />
            <UiSlider value={{ min: 40, max: 60 }} variant="range" size="s" />
          </div>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiSlider value={2} size="s" min={1} max={3} />\n<UiSlider value={1} size="s" min={1} max={3} valueTooltipDisplay valueLabelDisplay />\n<UiSlider value={50} variant="discrete" step={10} />\n<UiSlider value={{ min: 40, max: 60 }} variant="range" minGap={20} valueTooltipDisplay />\n<UiSlider value={50} disabled />`}
        result={
          <div style={style}>
            <UiSlider value={2} size="s" min={1} max={3} />
            <UiSlider value={1} size="s" min={1} max={3} valueTooltipDisplay valueLabelDisplay />
            <UiSlider value={50} variant="discrete" step={10} />
            <UiSlider value={{ min: 40, max: 60 }} variant="range" minGap={20} valueTooltipDisplay />
            <UiSlider value={50} disabled />
          </div>
        }
      />

      <hr />
      <h4>Props</h4>
      <PropsTable datas={SliderProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [volume, setVolume] = useState(10);\n\n<UiSlider value={volume} min={0} max={100} onChange={(value) => setVolume(value.max)} />\n<span>Volume : {volume}%</span>`}
        result={
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <UiSlider value={volume} min={0} max={100} onChange={(value) => setVolume(value.max)} />
            <span>Volume : {volume}%</span>
          </div>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default SliderExample;
