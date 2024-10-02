'use client';
import UiButtonGroupSplit from '@/ui/button-group-split/button-group-split';
import UiMenuItem from '@/ui/menu-item/menu-item';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const ButtonGroupSplitProps = [
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: '아래화살표 클릭시 표시될 MenuItems',
  },
  {
    Name: 'value',
    Type: 'string',
    Default: '-',
    Description: '버튼에 표시할 값',
  },
  {
    Name: 'type',
    Type: "'horizontal' | 'vertical'",
    Default: "'horizontal'",
    Description: '버튼 그룹의 정렬 방향',
  },
  {
    Name: 'variant',
    Type: "'default' | 'outlined'",
    Default: "'default'",
    Description: '버튼 그룹의 모양',
  },
  {
    Name: 'color',
    Type: "'primary' |'secondary' | 'error' | 'warning' | 'info' |'success'",
    Default: "'primary'",
    Description: '버튼 그룹의 색상',
  },
  {
    Name: 'size',
    Type: "'s' |'m' | 'l'",
    Default: "'m'",
    Description: '버튼 그룹의 크기',
  },
];

const comment = `
  없음!!
`;

// NOTE(hajae): React.ReactNode Type은 하나의 Wrapper로 감싸야해, onClose Event가 제대로 Init이 되지않으므로 나눠서 선언
const MenuItem1: React.ReactNode = <UiMenuItem>first menu item</UiMenuItem>;
const MenuItem2: React.ReactNode = <UiMenuItem>second menu item</UiMenuItem>;
const MenuItem3: React.ReactNode = <UiMenuItem>third menu item</UiMenuItem>;
const MenuItemsCode: string = `\n\t<UiMenuItem>first menu item</UiMenuItem>\n\t<UiMenuItem>second menu item</UiMenuItem>\n\t<UiMenuItem>third menu item</UiMenuItem>\n`;

const ButtonGroupSplitExample: React.FC = () => {
  const [state, setState] = useState<string>('Default');
  const handleMenuItemClick = (value: string) => setState(value);

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Type"
        code={`<UiButtonGroupSplit value="More">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" type="vertical">${MenuItemsCode}</UiButtonGroupSplit>`}
        result={
          <>
            <UiButtonGroupSplit value="More">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
            <UiButtonGroupSplit value="More" type="vertical">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
          </>
        }
      />
      <ExampleContent
        title="Variant"
        code={`<UiButtonGroupSplit value="More">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" variant="outlined">${MenuItemsCode}</UiButtonGroupSplit>`}
        result={
          <>
            <UiButtonGroupSplit value="More">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
            <UiButtonGroupSplit value="More" variant="outlined">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
          </>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiButtonGroupSplit value="More" size="s">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" size="l">${MenuItemsCode}</UiButtonGroupSplit>`}
        result={
          <>
            <UiButtonGroupSplit value="More" size="s">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
            <UiButtonGroupSplit value="More">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
            <UiButtonGroupSplit value="More" size="l">
              {MenuItem1}
              {MenuItem2}
              {MenuItem3}
            </UiButtonGroupSplit>
          </>
        }
      />
      <ExampleContent
        title="Color"
        code={`<UiButtonGroupSplit value="More">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" color="secondary">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" color="info">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" color="success">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" color="warning">${MenuItemsCode}</UiButtonGroupSplit>\n\n<UiButtonGroupSplit value="More" color="error">${MenuItemsCode}</UiButtonGroupSplit>`}
        result={
          <div className="example-result-column">
            <div className="example-result-row">
              <UiButtonGroupSplit value="More">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
              <UiButtonGroupSplit value="More" color="secondary">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
              <UiButtonGroupSplit value="More" color="info">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
            </div>
            <div className="example-result-row">
              <UiButtonGroupSplit value="More" color="success">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
              <UiButtonGroupSplit value="More" color="warning">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
              <UiButtonGroupSplit value="More" color="error">
                {MenuItem1}
                {MenuItem2}
                {MenuItem3}
              </UiButtonGroupSplit>
            </div>
          </div>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={ButtonGroupSplitProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="Click Menu Item"
        code={`<UiButtonGroupSplit value="More">\n\t<UiMenuItem onClick={() => alert('Menu Item Clicked')}>\n\t\tHello\n\t</UiMenuItem>\n\t<UiMenuItem onClick={() => alert('Menu Item Clicked')}>\n\t\tWorld\n\t</UiMenuItem>\n</UiButtonGroupSplit>`}
        result={
          <>
            <UiButtonGroupSplit value="More">
              <UiMenuItem onClick={() => alert('Menu Item Clicked')}>Hello</UiMenuItem>
              <UiMenuItem onClick={() => alert('Menu Item Clicked')}>World</UiMenuItem>
            </UiButtonGroupSplit>
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`const [state, setState] = useState('Default');\nconst handleMenuItemClick = (value: string) => setState(value);\n\n<UiButtonGroupSplit value={state}>\n\t<UiMenuItem onClick={() => handleMenuItemClick('Hello')}>Hello</UiMenuItem>\n\t<UiMenuItem onClick={() => handleMenuItemClick('World')}>World</UiMenuItem>\n</UiButtonGroupSplit>`}
        result={
          <>
            <UiButtonGroupSplit value={state}>
              <UiMenuItem onClick={() => handleMenuItemClick('Hello')}>Hello</UiMenuItem>
              <UiMenuItem onClick={() => handleMenuItemClick('World')}>World</UiMenuItem>
            </UiButtonGroupSplit>
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default ButtonGroupSplitExample;
