'use client';
import Link from 'next/link';
import PropsTable from '../../../_components/props-table/props-table';

const MenuItemProps = [
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: 'Item에 표시될 이름',
  },
  {
    Name: 'value',
    Type: 'string | number',
    Default: '-',
    Description: 'item(<option>)이 가지고 있는 값',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: '해당 Item의 disabled 유무',
  },
  {
    Name: 'onClick',
    Type: '() => void',
    Default: '-',
    Description: '해당 Item을 클릭하면 실행될 callback 함수',
  },
  {
    Name: 'onClose',
    Type: '() => void',
    Default: '-',
    Description: '해당 Item이 닫힐 때 실행될 callback 함수',
  },
];

const comment = `
  - Menu의 Item! 개별로 사용하지 않음.
  - Menu, Button Group Split Component와 함께 사용
`;

const MenuItemExample: React.FC = () => {
  return (
    <>
      <h4>Example Usage</h4>
      <span>
        ※ 개별로 사용되지 않는 컴포넌트이므로 <Link href={'/how-to-use/button-group-split'}>ButtonGroupSplit</Link>{' '}
        Component와 <Link href={'/how-to-use/menu'}>Menu</Link> Component를 참고하세요.
      </span>

      <h4>Props</h4>
      <PropsTable datas={MenuItemProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default MenuItemExample;
