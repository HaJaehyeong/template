'use client';
import UiRadioGroup from '@/ui/radio-group/radio-group';
import UiRadio from '@/ui/radio/radio';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const RadioGroupProps = [
  {
    Name: 'name',
    Type: 'string',
    Default: '-',
    Description: 'radio group name',
  },
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: 'radio group children',
  },
  {
    Name: 'className',
    Type: 'string',
    Default: '-',
    Description: 'additional class name',
  },
];

const comment = `
  없음!!
`;

const RadioGroupExample: React.FC = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('1');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
  };

  return (
    <>
      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`import styles from './radio-group-example.module.scss';\n\nconst [selectedRadioValue, setSelectedRadioValue] = useState('1');\nconst handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n\tsetSelectedRadioValue(event.target.value);\n};\n\n<UiRadioGroup name="group-example" className={styles.example}>\n\t<UiRadio label="Child1" value="1" checked={selectedRadioValue === '1'} onChange={handleRadioChange} />\n\t<UiRadio label="Child2" value="2" checked={selectedRadioValue === '2'} onChange={handleRadioChange} />\n\t<UiRadio label="Child3" value="3" checked={selectedRadioValue === '3'} onChange={handleRadioChange} />\n</UiRadioGroup>`}
        result={
          <UiRadioGroup name="group-example">
            <UiRadio label="Child1" value="1" checked={selectedRadioValue === '1'} onChange={handleRadioChange} />
            <UiRadio label="Child2" value="2" checked={selectedRadioValue === '2'} onChange={handleRadioChange} />
            <UiRadio label="Child3" value="3" checked={selectedRadioValue === '3'} onChange={handleRadioChange} />
          </UiRadioGroup>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={RadioGroupProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default RadioGroupExample;
