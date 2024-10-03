'use client';
import UiListItem from '@/ui/list-item/list-item';
import { Ri24HoursLine, RiApps2AddLine, RiCircleLine, RiListCheck, RiUser2Line } from '@remixicon/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

/**
 * icon?: RemixiconComponentType;
 * name: string;
 * arrow?: boolean;
 * active?: boolean;
 */
const ListItemProps = [
  {
    Name: 'name',
    Type: 'string',
    Default: '-',
    Description: 'Item에 표시될 이름',
  },
  {
    Name: 'icon',
    Type: 'RemixiconComponentType',
    Default: '-',
    Description: '표시할 아이콘 (Remixicon Component 이용)',
  },
  {
    Name: 'arrow',
    Type: 'boolean',
    Default: 'false',
    Description: '아이템 오른쪽 끝에 화살표 표시 유무',
  },
  {
    Name: 'active',
    Type: 'boolean',
    Default: 'false',
    Description: '아이템 활성화 표시',
  },
];

const comment = `
  제일 왼쪽에 표시되고 있는 Navigation에 각 아이템을 UiListItem Component를 이용해서 작성했습니다.
`;

const ListItemExample: React.FC = () => {
  const pathName = usePathname();
  const NAVI_EXAMPLES = [
    { name: 'Button', path: '/how-to-use/button', icon: RiCircleLine, sortNo: 1 },
    { name: 'Button Group', path: '/how-to-use/button-group', icon: RiApps2AddLine, sortNo: 2 },
    { name: 'List Item', path: '/how-to-use/list-item', icon: RiListCheck, sortNo: 3 },
  ];

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Name"
        code={`<div style={{ width: '210px' }}>\n\t<UiListItem name="Name" />\n\t<UiListItem name="TEST" />\n</div>`}
        result={
          <div style={{ width: '210px' }}>
            <UiListItem name="Name" />
            <UiListItem name="TEST" />
          </div>
        }
      />
      <ExampleContent
        title="Icon"
        code={`<div style={{ width: '210px' }}>\n\t<UiListItem name="Example" icon={Ri24HoursLine} />\n\t<UiListItem name="Example" icon={RiUser2Line} />\n</div>`}
        result={
          <div style={{ width: '210px' }}>
            <UiListItem name="Example" icon={Ri24HoursLine} />
            <UiListItem name="Example" icon={RiUser2Line} />
          </div>
        }
      />
      <ExampleContent
        title="Active"
        code={`<div style={{ width: '210px' }}>\n\t<UiListItem name="Example" icon={Ri24HoursLine} active />\n\t<UiListItem name="Example" icon={RiUser2Line} active={true} />\n</div>`}
        result={
          <div style={{ width: '210px' }}>
            <UiListItem name="Example" icon={Ri24HoursLine} active />
            <UiListItem name="Example" icon={RiUser2Line} active={true} />
          </div>
        }
      />
      <ExampleContent
        title="Arrow"
        code={`<div style={{ width: '210px' }}>\n\t<UiListItem name="Example" icon={Ri24HoursLine} active arrow />\n\t<UiListItem name="Example" icon={RiUser2Line} active={true} arrow={true} />\n</div>`}
        result={
          <div style={{ width: '210px' }}>
            <UiListItem name="Example" icon={Ri24HoursLine} active arrow />
            <UiListItem name="Example" icon={RiUser2Line} active={true} arrow={true} />
          </div>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={ListItemProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="Navigation"
        code={`const pathName = usePathname();\nconst NAVI_EXAMPLES = [\n\t{ name: 'Button', path: '/how-to-use/button', icon: RiCircleLine, sortNo: 1 },\n\t{ name: 'Button Group', path: '/how-to-use/button-group', icon: RiApps2AddLine, sortNo: 2 },\n\t{ name: 'List Item', path: '/how-to-use/list-item', icon: RiListCheck, sortNo: 3 },\n];\n\n<div style={{ width: '300px' }}>\n\t{NAVI_EXAMPLES.map((item, index) => (\n\t\t<Link href={item.path} key={item.name + index}>\n\t\t\t<UiListItem icon={item.icon} name={item.name} active={item.path === pathName} arrow />\n\t\t</Link>\n\t))}\n</div>`}
        result={
          <div style={{ width: '300px' }}>
            {NAVI_EXAMPLES.map((item, index) => (
              <Link href={item.path} key={item.name + index}>
                <UiListItem icon={item.icon} name={item.name} active={item.path === pathName} arrow />
              </Link>
            ))}
          </div>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default ListItemExample;
