'use client';
import UiCheckBox from '@/ui/checkbox/checkbox';
import { ChangeEvent, useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const CheckboxProps = [
  {
    Name: 'label',
    Type: 'string',
    Default: '-',
    Description: 'checkbox 뒤에 표시될 Label',
  },
  {
    Name: 'value',
    Type: 'string',
    Default: '-',
    Description: 'input checkbox가 가지고 있는 값',
  },
  {
    Name: 'color',
    Type: "'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'",
    Default: 'primary',
    Description: 'checkbox의 색상',
  },
  {
    Name: 'size',
    Type: "'s' |'m' | 'l'",
    Default: 'm',
    Description: 'checkbox의 크기',
  },
  {
    Name: 'checked',
    Type: 'boolean',
    Default: 'false',
    Description: 'checkbox가 checked 되어 있는지 여부',
  },
  {
    Name: 'indeterminate',
    Type: 'boolean',
    Default: 'false',
    Description: 'checkbox가 indeterminate 상태인지 여부',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'checkbox가 disabled 되어 있는지 여부',
  },
  {
    Name: 'onChange',
    Type: '(event: ChangeEvent<HTMLInputElement>) => void',
    Default: '-',
    Description: 'checkbox checked/unchecked 상태가 바꼈었을 때 호출할 함수',
  },
];

const comment = `
  없음!!
`;

const CheckboxExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      alert(event.target.value + ': hello');
      setIsChecked(true);
    } else {
      alert(event.target.value + ': world');
      setIsChecked(false);
    }
  };

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Variant"
        code={`<UiCheckBox />\n<UiCheckBox label="Label" />\n<UiCheckBox checked />\n<UiCheckBox label="Label" checked />`}
        result={
          <>
            <UiCheckBox />
            <UiCheckBox label="Label" />
            <UiCheckBox checked />
            <UiCheckBox label="Label" checked />
          </>
        }
      />
      <ExampleContent
        title="Color"
        code={`<UiCheckBox checked />\n<UiCheckBox color="secondary" checked />\n<UiCheckBox color="info" checked />\n<UiCheckBox color="success" checked />\n<UiCheckBox color="warning" checked />\n<UiCheckBox color="error" checked />`}
        result={
          <>
            <UiCheckBox checked />
            <UiCheckBox color="secondary" checked />
            <UiCheckBox color="info" checked />
            <UiCheckBox color="success" checked />
            <UiCheckBox color="warning" checked />
            <UiCheckBox color="error" checked />
          </>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiCheckBox size="m" checked />\n<UiCheckBox size="s" color="secondary" checked />\n<UiCheckBox size="l" color="error" checked />`}
        result={
          <>
            <UiCheckBox size="m" checked />
            <UiCheckBox size="s" color="secondary" checked />
            <UiCheckBox size="l" color="error" checked />
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiCheckBox checked />\n<UiCheckBox indeterminate checked />\n<UiCheckBox disabled checked />`}
        result={
          <>
            <UiCheckBox checked />
            <UiCheckBox indeterminate checked />
            <UiCheckBox disabled checked />
          </>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={CheckboxProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="State"
        code={`const [isChecked, setIsChecked] = useState(false);\nconst handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {\n\tif (event.target.checked) {\n\t\talert(event.target.value + ': hello');\n\t\tsetIsChecked(true);\n\t} else {\n\t\talert(event.target.value + ': world');\n\t\tsetIsChecked(false);\n\t}\n};\n\n<UiCheckBox checked={isChecked} value="value" label="Example" onChange={handleCheckboxChange} />`}
        result={
          <>
            <UiCheckBox checked={isChecked} value="value" label="Example" onChange={handleCheckboxChange} />
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default CheckboxExample;
