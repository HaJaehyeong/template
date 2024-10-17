'use client';
import UiTransferList from '@/ui/transfer-list/transfer-list';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const TransferListProps = [
  {
    Name: 'type',
    Type: "'default' | 'enganced'",
    Default: 'default',
    Description: 'Transfer List의 타입',
  },
  {
    Name: 'leftDatas',
    Type: 'string[]',
    Default: '[]',
    Description: '좌측 Transfer List에 표시할 Data',
  },
  {
    Name: 'rightDatas',
    Type: 'string[]',
    Default: '[]',
    Description: '우측 Transfer List에 표시할 Data',
  },
  {
    Name: 'leftTitle',
    Type: 'string',
    Default: '-',
    Description: '(Only enhanced type) 좌측 Transfer List의 Title',
  },
  {
    Name: 'leftSubTitle',
    Type: 'string',
    Default: '-',
    Description: '(Only enhanced type) 좌측 Transfer List의 Subtitle',
  },
  {
    Name: 'rightTitle',
    Type: 'string',
    Default: '-',
    Description: '(Only enhanced type) 우측 Transfer List의 Title',
  },
  {
    Name: 'rightSubTitle',
    Type: 'string',
    Default: '-',
    Description: '(Only enhanced type) 우측 Transfer List의 Subtitle',
  },
  {
    Name: 'onChange',
    Type: '(leftDatas: string[], rightDatas: string[]) => void',
    Default: '-',
    Description: 'Transfer List의 Data가 변경될 때 실행할 callback 함수',
  },
];

const comment = `
  없음!!
`;

const TransferListExample: React.FC = () => {
  const [leftItems, setLeftItems] = useState<string[]>(['hello', 'world', '!!!!']);
  const [rightItems, setRightItems] = useState<string[]>([]);

  return (
    <div>
      <h4>Example Usage</h4>
      <ExampleContent
        title="With State"
        code={`const [leftItems, setLeftItems] = useState<string[]>(['hello', 'world', '!!!!']);\nconst [rightItems, setRightItems] = useState<string[]>([]);\n\n<UiTransferList\n\tleftDatas={leftItems}\n\trightDatas={rightItems}\n\tonChange={({ leftDatas, rightDatas }) => {\n\t\tsetLeftItems(leftDatas);\n\t\tsetRightItems(rightDatas);\n\t}}\n/>\n<div style={{ display: 'flex', flexDirection: 'column' }}>\n\t<div style={{ fontSize: '20px' }}>result: </div>\n\t<label>Left Datas →{leftItems.join(', ')}</label>\n\t<label>Right Datas →{rightItems.join(', ')}</label>\n</div>`}
        result={
          <div style={{ position: 'relative', fontSize: '16px' }}>
            <UiTransferList
              leftDatas={leftItems}
              rightDatas={rightItems}
              onChange={({ leftDatas, rightDatas }) => {
                setLeftItems(leftDatas);
                setRightItems(rightDatas);
              }}
            />
          </div>
        }
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '20px' }}>result: </div>
        <label>Left Datas →{leftItems.join(', ')}</label>
        <label>Right Datas →{rightItems.join(', ')}</label>
      </div>

      <h4>Props</h4>
      <PropsTable datas={TransferListProps} />

      <hr />

      <h4>Comment</h4>
      <pre>{comment}</pre>
    </div>
  );
};

export default TransferListExample;
