'use client';
import UiRadio from '@/ui/radio/radio';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const RadioProps = [
  {
    Name: 'label',
    Type: 'string | React.ReactNode',
    Default: '-',
    Description: '버튼에 표시될 라벨',
  },
  {
    Name: 'value',
    Type: 'string | React.ReactNode',
    Default: '-',
    Description: '버튼이 가질 값',
  },
  {
    Name: 'name',
    Type: 'string',
    Default: '-',
    Description: 'Radio Group에 사용할 radio button의 prop',
  },
  {
    Name: 'color',
    Type: "'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'",
    Default: "'primary'",
    Description: '버튼의 색상',
  },
  {
    Name: 'size',
    Type: "'s' | 'm' | 'l'",
    Default: "'m'",
    Description: '버튼의 크기',
  },
  {
    Name: 'checked',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼의 check 유무',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼 비활성화 유무',
  },
  {
    Name: 'onChange',
    Type: '(event: ChangeEvent<HTMLInputElement>) => void',
    Default: '-',
    Description: '버튼 checked/unchecked 상태가 바꼈었을 때 호출할 콜백 함수',
  },
];

const comment = `
  없음!!
`;

const RadioExample: React.FC = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('1');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
  };

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Label"
        code={`<UiRadio />\n<UiRadio label="" />\n<UiRadio label="Label" />\n<UiRadio label="Label Example" />`}
        result={
          <>
            <UiRadio />
            <UiRadio label="" />
            <UiRadio label="Label" />
            <UiRadio label="Label Example" />
          </>
        }
      />
      <ExampleContent
        title="Colors"
        code={`<UiRadio checked />\n<UiRadio color="primary" checked />\n<UiRadio color="secondary" checked />\n<UiRadio color="info" checked />\n<UiRadio color="success" checked />\n<UiRadio color="warning" checked />\n<UiRadio color="error" checked />`}
        result={
          <>
            <UiRadio checked />
            <UiRadio color="primary" checked />
            <UiRadio color="secondary" checked />
            <UiRadio color="info" checked />
            <UiRadio color="success" checked />
            <UiRadio color="warning" checked />
            <UiRadio color="error" checked />
          </>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiRadio size="s" />\n<UiRadio />\n<UiRadio size="m" />\n<UiRadio size="l" />\n<UiRadio label="Small" size="s" checked />\n<UiRadio label="Medium" checked />\n<UiRadio label="Large" size="l" checked />`}
        result={
          <>
            <UiRadio size="s" />
            <UiRadio />
            <UiRadio size="m" />
            <UiRadio size="l" />
            <UiRadio label="Small" size="s" checked />
            <UiRadio label="Medium" checked />
            <UiRadio label="Large" size="l" checked />
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiRadio label="unchecked" />\n<UiRadio label="checked" checked />\n<UiRadio label="unchecked disabled" disabled />\n<UiRadio label="checked disabled" checked disabled />`}
        result={
          <>
            <UiRadio label="unchecked" />
            <UiRadio label="checked" checked />
            <UiRadio label="unchecked disabled" disabled />
            <UiRadio label="checked disabled" checked disabled />
          </>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={RadioProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [selectedRadioValue, setSelectedRadioValue] = useState('1');\nconst handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n\tsetSelectedRadioValue(event.target.value);\n};\n\n<UiRadio\n\tlabel="Label1"\n\tvalue="1"\n\tname="group"\n\tchecked={selectedRadioValue === '1'}\n\tonChange={handleRadioChange}\n/>\n<UiRadio\n\tlabel="Label2"\n\tvalue="2"\n\tname="group"\n\tchecked={selectedRadioValue === '2'}\n\tonChange={handleRadioChange}\n/>\n<UiRadio\n\tlabel="Label3"\n\tvalue="3"\n\tname="group"\n\tchecked={selectedRadioValue === '3'}\n\tonChange={handleRadioChange}\n/>`}
        result={
          <>
            <UiRadio
              label="Label1"
              value="1"
              name="group"
              checked={selectedRadioValue === '1'}
              onChange={handleRadioChange}
            />
            <UiRadio
              label="Label2"
              value="2"
              name="group"
              checked={selectedRadioValue === '2'}
              onChange={handleRadioChange}
            />
            <UiRadio
              label="Label3"
              value="3"
              name="group"
              checked={selectedRadioValue === '3'}
              onChange={handleRadioChange}
            />
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default RadioExample;
