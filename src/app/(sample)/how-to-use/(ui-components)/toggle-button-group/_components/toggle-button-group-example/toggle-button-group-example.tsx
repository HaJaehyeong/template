'use client';
import UiToggleButtonGroup from '@/ui/toggle-button-group/toggle-button-group';
import UiToggleButton from '@/ui/toggle-button/toggle-button';
import { RiHeart2Line, RiMouseLine } from '@remixicon/react';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const ToggleButtonGroupProps = [
  {
    Name: 'size',
    Type: "'s' | 'm' | 'l'",
    Default: 'm',
    Description: 'Toggle Button Group 크기',
  },
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: 'Toggle Button Group안에 들어 Toggle Button',
  },
];

const ToggleButtonProps = [
  {
    Name: 'active',
    Type: 'boolean',
    Default: 'false',
    Description: 'Toggle Button 활성화 유무',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'Toggle Button 비활성화 유무',
  },
  {
    Name: 'size',
    Type: "'s' | 'm' | 'l'",
    Default: 'm',
    Description: 'Toggle Button Group 크기',
  },
  {
    Name: 'divider',
    Type: 'boolean',
    Default: 'true',
    Description: 'Toggle Button 경계선 유무',
  },
  {
    Name: 'icon',
    Type: 'RemixiconComponentType',
    Default: 'RiAlignLeft',
    Description: 'Toggle Button Icon',
  },
  {
    Name: 'onClick',
    Type: '() => void',
    Default: '-',
    Description: 'Toggle Button Click Event',
  },
];

const comment = `
  없음!!
`;

const ToggleButtonGroupExample: React.FC = () => {
  const [isActive, setIsActive] = useState('1');

  return (
    <>
      <h4>Example Usage</h4>
      <ExampleContent
        title="Icon"
        code={`<UiToggleButtonGroup>\n\t<UiToggleButton />\n\t<UiToggleButton icon={RiMouseLine} />\n\t<UiToggleButton icon={RiHeart2Line} />\n</UiToggleButtonGroup>`}
        result={
          <UiToggleButtonGroup>
            <UiToggleButton />
            <UiToggleButton icon={RiMouseLine} />
            <UiToggleButton icon={RiHeart2Line} />
          </UiToggleButtonGroup>
        }
      />
      <ExampleContent
        title="Click"
        code={`const [isActive, setIsActive] = useState('1');\n\n<UiToggleButtonGroup>\n\t<UiToggleButton onClick={() => setIsActive('1')} active={isActive === '1'} />\n\t<UiToggleButton icon={RiMouseLine} onClick={() => setIsActive('2')} active={isActive === '2'} />\n\t<UiToggleButton icon={RiHeart2Line} onClick={() => setIsActive('3')} active={isActive === '3'} disabled />\n</UiToggleButtonGroup>`}
        result={
          <UiToggleButtonGroup>
            <UiToggleButton onClick={() => setIsActive('1')} active={isActive === '1'} />
            <UiToggleButton icon={RiMouseLine} onClick={() => setIsActive('2')} active={isActive === '2'} />
            <UiToggleButton icon={RiHeart2Line} onClick={() => setIsActive('3')} active={isActive === '3'} disabled />
          </UiToggleButtonGroup>
        }
      />

      <hr />

      <h4>Toogle Button Group Props</h4>
      <PropsTable datas={ToggleButtonGroupProps} />

      <hr />

      <h4>Toogle Button Props</h4>
      <PropsTable datas={ToggleButtonProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default ToggleButtonGroupExample;
