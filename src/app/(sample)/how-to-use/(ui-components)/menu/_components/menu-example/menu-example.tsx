'use client';
import UiButton from '@/ui/button/button';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiMenu from '@/ui/menu/menu';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const MenuProps = [
  {
    Name: 'isOpen',
    Type: 'boolean',
    Default: 'false',
    Description: '메뉴의 Open 유무',
  },
  {
    Name: 'onClose',
    Type: '() => void',
    Default: '-',
    Description: '메뉴가 닫혔을 때 실행할 callback 함수',
  },
];

const comment = `
  현재, 기본적으로 아래에 메뉴가 표시되고, prop 설정을 해서 위로 출력하는 기능은 제공되지 않습니다.
  하지만, 화면 하단에 표시될 때 표시될 자리가 없으면 위쪽에 표시됩니다.
`;

const MenuExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h4>Example Usage</h4>
      <ExampleContent
        title="with state"
        code={`const [isOpen, setIsOpen] = useState(false);\n\n<div style={{ position: 'relative', fontSize: '16px' }}>\n\t<UiButton value="Example Button" variant="outlined" color="info" onClick={() => setIsOpen(true)} />\n\t<UiMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>\n\t\t<UiMenuItem>First Item</UiMenuItem>\n\t\t<UiMenuItem>Second Item</UiMenuItem>\n\t</UiMenu>\n</div>`}
        result={
          <div style={{ position: 'relative', fontSize: '16px' }}>
            <UiButton value="Example Button" variant="outlined" color="info" onClick={() => setIsOpen(true)} />
            <UiMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
            </UiMenu>
          </div>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={MenuProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default MenuExample;
