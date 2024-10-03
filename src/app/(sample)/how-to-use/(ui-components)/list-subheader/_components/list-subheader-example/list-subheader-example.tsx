'use client';
import UiListSubheader from '@/ui/list-subheader/list-subheader';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const ListSubheaderProps = [
  {
    Name: 'title',
    Type: 'string',
    Default: '-',
    Description: '표시할 제목',
  },
];

const comment = `
  없음!!
`;

const ListSubheaderExample: React.FC = () => {
  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Title"
        code={`<UiListSubheader title="Sample & Example" />`}
        result={
          <>
            <UiListSubheader title="Sample & Example" />
          </>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={ListSubheaderProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default ListSubheaderExample;
