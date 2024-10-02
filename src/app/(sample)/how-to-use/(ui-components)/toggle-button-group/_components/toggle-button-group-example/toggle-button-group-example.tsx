'use client';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const CheckboxProps = [
  {
    Name: 'value',
    Type: 'string | React.ReactNode',
    Default: '-',
    Description: '버튼에 표시할 값',
  },
];

const comment = `
  없음!!
`;

const CheckboxExample: React.FC = () => {
  return (
    <>
      <h4>Example</h4>
      <ExampleContent title="" code={``} result={''} />

      <h4>Props</h4>
      <PropsTable datas={CheckboxProps} />

      <hr />

      <h4>Example Usage</h4>

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default CheckboxExample;
