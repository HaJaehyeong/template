'use client';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiSelect from '@/ui/select/select';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const SelectProps = [
  {
    Name: 'label',
    Type: 'string',
    Default: '-',
    Description: 'Select의 기본 Label',
  },
  {
    Name: 'variant',
    Type: "'standard' | 'outline' | 'filed'",
    Default: 'standard',
    Description: 'Select의 Style',
  },
  {
    Name: 'defaultValue',
    Type: 'string | number',
    Default: '-',
    Description: 'Select 기본 선택될 Item의 Value',
  },
  {
    Name: 'helperText',
    Type: 'string',
    Default: '-',
    Description: 'Select 아래에 표시되는 Text',
  },
  {
    Name: 'size',
    Type: "'s' | 'm'",
    Default: 'm',
    Description: 'Select의 Size',
  },
  {
    Name: 'onChange',
    Type: '(value: string | number) => void',
    Default: '-',
    Description: 'Select의 선택 Item이 변경될 시 실행되는 콜백 함수',
  },
  {
    Name: 'isError',
    Type: 'boolean',
    Default: 'false',
    Description: 'Select의 Error 상태를 표시',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'Select의 비활성화',
  },
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: 'Select option에 들어갈 Item',
  },
];

const comment = `
  없음!!
`;

const SelectExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const style: React.CSSProperties = {
    position: 'relative',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
  };
  const item1: React.ReactNode = <UiMenuItem value="apple">Apple</UiMenuItem>;
  const item2: React.ReactNode = <UiMenuItem value="banana">Banana</UiMenuItem>;
  const item3: React.ReactNode = <UiMenuItem value="orange">Orange</UiMenuItem>;
  const itemCode: string = `\n\t<UiMenuItem value="apple">Apple</UiMenuItem>\n\t<UiMenuItem value="banana">Banana</UiMenuItem>\n\t<UiMenuItem value="orange">Orange</UiMenuItem>\n`;

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Variant"
        code={`<UiSelect label="Fruit">${itemCode}</UiSelect>\n<UiSelect label="Fruit" variant="outline">${itemCode}</UiSelect>\n<UiSelect label="Fruit" variant="filed">${itemCode}</UiSelect>`}
        result={
          <div style={style}>
            <UiSelect label="Fruit">
              {item1}
              {item2}
              {item3}
            </UiSelect>
            <UiSelect label="Fruit" variant="outline">
              {item1}
              {item2}
              {item3}
            </UiSelect>
            <UiSelect label="Fruit" variant="filed">
              {item1}
              {item2}
              {item3}
            </UiSelect>
          </div>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiSelect label="Fruit" size="s">${itemCode}</UiSelect>\n<UiSelect label="Fruit" variant="outline" size="s">${itemCode}</UiSelect>\n<UiSelect label="Fruit" variant="filed" size="s">${itemCode}</UiSelect>`}
        result={
          <div style={style}>
            <UiSelect label="Fruit" size="s">
              {item1}
              {item2}
              {item3}
            </UiSelect>
            <UiSelect label="Fruit" variant="outline" size="s">
              {item1}
              {item2}
              {item3}
            </UiSelect>
            <UiSelect label="Fruit" variant="filed" size="s">
              {item1}
              {item2}
              {item3}
            </UiSelect>
          </div>
        }
      />

      <hr />

      <h4>Props</h4>
      <PropsTable datas={SelectProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [selectedValue, setSelectedValue] = useState('');\n\n<UiSelect\n\tlabel="Fruit"\n\tonChange={(value) => setSelectedValue(value as string)}\n\tisError={selectedValue === 'coffee'}\n\thelperText={selectedValue === 'coffee' ? 'coffee is not fruit' : ''}\n>\n\t<UiMenuItem value="apple">Apple</UiMenuItem>\n\t<UiMenuItem value="banana">Banana</UiMenuItem>\n\t<UiMenuItem value="orange">Orange</UiMenuItem>\n\t<UiMenuItem value="coffee">Coffee</UiMenuItem>\n</UiSelect>\n<span>Selected Item: {selectedValue}</span>`}
        result={
          <div style={style}>
            <UiSelect
              label="Fruit"
              onChange={(value) => setSelectedValue(value as string)}
              isError={selectedValue === 'coffee'}
              helperText={selectedValue === 'coffee' ? 'coffee is not fruit' : ''}
            >
              <UiMenuItem value="apple">Apple</UiMenuItem>
              <UiMenuItem value="banana">Banana</UiMenuItem>
              <UiMenuItem value="orange">Orange</UiMenuItem>
              <UiMenuItem value="coffee">Coffee</UiMenuItem>
            </UiSelect>
            <span>Selected Item: {selectedValue}</span>
          </div>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default SelectExample;
