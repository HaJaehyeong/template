'use client';
import UiSwitch from '@/ui/switch/switch';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const SwitchProps = [
  {
    Name: 'label',
    Type: 'string',
    Default: '-',
    Description: 'Switch에 표시할 라벨 이름',
  },
  {
    Name: 'color',
    Type: "'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'inactive'",
    Default: 'primary',
    Description: 'Switch의 색상',
  },
  {
    Name: 'size',
    Type: "'s' | 'm'",
    Default: 'm',
    Description: 'Switch의 크기',
  },
  {
    Name: 'checked',
    Type: 'boolean',
    Default: 'false',
    Description: 'Switch의 ���기 checked state',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'Switch의 disabled state',
  },
  {
    Name: 'onChange',
    Type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
    Default: '-',
    Description: 'Switch의 checked state가 변경될 때 호출되는 콜백 함수',
  },
];

const comment = `
  없음!!
`;

const SwitchExample: React.FC = () => {
  const [onOff, setOnOff] = useState(false);
  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Color"
        code={`<UiSwitch label="Label" />\n<UiSwitch label="Label" color="secondary" />\n<UiSwitch label="Label" color="info" />\n<UiSwitch label="Label" color="success" />\n<UiSwitch label="Label" color="warning" />\n<UiSwitch label="Label" color="error" />`}
        result={
          <>
            <UiSwitch label="Label" />
            <UiSwitch label="Label" color="secondary" />
            <UiSwitch label="Label" color="info" />
            <UiSwitch label="Label" color="success" />
            <UiSwitch label="Label" color="warning" />
            <UiSwitch label="Label" color="error" />
          </>
        }
      />
      <ExampleContent
        title="Size"
        code={`// NOTE(hajae): 상기 color에 표시된 예시가 Medium 사이즈\n<UiSwitch label="Small" size="s" />\n<UiSwitch label="Small" color="secondary" size="s" />\n<UiSwitch label="Small" color="info" size="s" />\n<UiSwitch label="Small" color="success" size="s" />\n<UiSwitch label="Small" color="warning" size="s" />\n<UiSwitch label="Small" color="error" size="s" />`}
        result={
          <>
            <UiSwitch label="Small" size="s" />
            <UiSwitch label="Small" color="secondary" size="s" />
            <UiSwitch label="Small" color="info" size="s" />
            <UiSwitch label="Small" color="success" size="s" />
            <UiSwitch label="Small" color="warning" size="s" />
            <UiSwitch label="Small" color="error" size="s" />
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiSwitch label="Disabled" size="s" disabled />\n<UiSwitch label="Disabled" size="m" disabled />\n<UiSwitch label="Checked" size="s" checked />\n<UiSwitch label="Checked" size="m" checked />`}
        result={
          <>
            <UiSwitch label="Disabled" size="s" disabled />
            <UiSwitch label="Disabled" size="m" disabled />
            <UiSwitch label="Checked" size="s" checked />
            <UiSwitch label="Checked" size="m" checked />
          </>
        }
      />

      <hr />

      <h4>Props</h4>
      <PropsTable datas={SwitchProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [onOff, setOnOff] = useState(false);\n\n<UiSwitch label="Switch" onChange={(checked) => setOnOff(checked)} />\n<span>On/Off : {onOff ? 'On!!' : 'Off@@'}</span>`}
        result={
          <>
            <UiSwitch label="Switch" onChange={(checked) => setOnOff(checked)} checked={onOff} />
            <span>On/Off : {onOff ? 'On!!' : 'Off@@'}</span>
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default SwitchExample;
