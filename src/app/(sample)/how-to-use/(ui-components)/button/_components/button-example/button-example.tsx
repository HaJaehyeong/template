'use client';
import UiButton from '@/ui/button/button';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const ButtonProps = [
  {
    Name: 'value',
    Type: 'string | React.ReactNode',
    Default: '-',
    Description: '버튼에 표시할 값',
  },
  {
    Name: 'variant',
    Type: "'contained' | 'outlined' | 'text'",
    Default: "'contained'",
    Description: '버튼의 모양',
  },
  {
    Name: 'color',
    Type: "'primary' |'secondary' | 'error' | 'warning' | 'info' |'success'",
    Default: "'primary'",
    Description: '버튼의 색상',
  },
  {
    Name: 'size',
    Type: "'s' |'m' | 'l'",
    Default: "'m'",
    Description: '버튼의 크기',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼 비활성화 유무',
  },
  {
    Name: 'onClick',
    Type: '() => void',
    Default: '-',
    Description: '버튼을 클릭했을 때 호출할 함수',
  },
  {
    Name: 'leftIcon',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 왼쪽 아이콘 표시 유무',
  },
  {
    Name: 'rightIcon',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 오른쪽 아이콘 표시 유무',
  },
  {
    Name: 'fabExtended',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 FAB(Floating Action Button) 확장 모양 표시 유무',
  },
  {
    Name: 'fabRound',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 FAB(Floating Action Button) 둥근 모양 표시 유무',
  },
  {
    Name: 'star',
    Type: 'boolean',
    Default: 'false',
    Description: '버튼에 별 아이콘 표시 유무',
  },
  {
    Name: 'width',
    Type: 'number',
    Default: '-',
    Description: '버튼의 너비',
  },
  {
    Name: 'style',
    Type: 'React.CSSProperties',
    Default: '-',
    Description: '버튼의 스타일',
  },
];

const comment = `
  없음!!
`;

const ButtonExample: React.FC = () => {
  const [value, setValue] = useState('Value');
  const handleButtonClick = () => {
    setValue('Clicked!');
    setTimeout(() => {
      setValue('Value');
    }, 2000);
  };

  const [count, setCount] = useState(0);
  const handleCountIncrement = () => setCount(count + 1);
  const handleCountDecrement = () => setCount(count - 1);

  const customStyle1: React.CSSProperties = { backgroundColor: '#000000', borderRadius: '20px', fontSize: '24px' };
  const customStyle2: React.CSSProperties = {
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '20px',
    fontSize: '24px',
  };

  const [showFab, setShowFab] = useState(false);
  const handleToggleFab = () => setShowFab(!showFab);

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Variant"
        code={`<UiButton value="Button" />\n<UiButton value="Outlined" variant="outlined" />\n<UiButton value="Text" variant="text" />`}
        result={
          <>
            <UiButton value="Contained" />
            <UiButton value="Outlined" variant="outlined" />
            <UiButton value="Text" variant="text" />
          </>
        }
      />
      <ExampleContent
        title="Color"
        code={`<UiButton value="Primary" />\n<UiButton value="Secondary" color="secondary" />\n<UiButton value="Error" variant="outlined" color="error" />\n<UiButton value="Warning" variant="outlined" color="warning" />\n<UiButton value="Info" variant="text" color="info" />\n<UiButton value="Success" variant="text" color="success" />`}
        result={
          <>
            <UiButton value="Primary" />
            <UiButton value="Secondary" color="secondary" />
            <UiButton value="Error" variant="outlined" color="error" />
            <UiButton value="Warning" variant="outlined" color="warning" />
            <UiButton value="Info" variant="text" color="info" />
            <UiButton value="Success" variant="text" color="success" />
          </>
        }
      />
      <ExampleContent
        title="Size"
        code={`<UiButton value="Small" size="s" />\n<UiButton value="Large" size="l" />\n<UiButton value="Small" variant="outlined" size="s" />\n<UiButton value="Large" variant="outlined" size="l" />\n<UiButton value="Small" variant="text" size="s" />\n<UiButton value="Large" variant="text" size="l" />`}
        result={
          <>
            <UiButton value="Small" size="s" />
            <UiButton value="Large" size="l" />
            <UiButton value="Small" variant="outlined" size="s" />
            <UiButton value="Large" variant="outlined" size="l" />
            <UiButton value="Small" variant="text" size="s" />
            <UiButton value="Large" variant="text" size="l" />
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiButton value="Enabled" disabled={false} />\n<UiButton value="Disabled" disabled />\n<UiButton value="Disabled" variant="outlined" disabled />\n<UiButton value="Disabled" variant="text" disabled />`}
        result={
          <>
            <UiButton value="Enabled" disabled={false} />
            <UiButton value="Disabled" disabled />
            <UiButton value="Disabled" variant="outlined" disabled />
            <UiButton value="Disabled" variant="text" disabled />
          </>
        }
      />

      <h4>Props</h4>
      <PropsTable datas={ButtonProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="Alert"
        code={`\n<UiButton value="Alert" color="error" onClick={() => alert('Button clicked!')} />`}
        result={
          <>
            <UiButton value="Alert" color="error" onClick={() => alert('Button clicked!')} />
          </>
        }
      />
      <ExampleContent
        title="Clicked"
        code={`const [value, setValue] = useState('Value');\nconst handleButtonClick = () => {\n\tsetValue('Clicked!');\n\tsetTimeout(() => {\n\t\tsetValue('Value');\n\t}, 2000);\n};\n\n<UiButton value={value} onClick={handleButtonClick} />`}
        result={
          <>
            <UiButton value={value} onClick={handleButtonClick} />
          </>
        }
      />
      <ExampleContent
        title="Count"
        code={`const [count, setCount] = useState(0);\nconst handleCountIncrement = () => setCount(count + 1);\nconst handleCountDecrement = () => setCount(count - 1);\n\n<span>{count}</span>\n<UiButton value="+" onClick={handleCountIncrement} disabled={count === 5} />\n<UiButton value="-" onClick={handleCountDecrement} disabled={count === 0} />`}
        result={
          <>
            <span>{count}</span>
            <UiButton value="+" onClick={handleCountIncrement} disabled={count === 5} />
            <UiButton value="-" onClick={handleCountDecrement} disabled={count === 0} />
          </>
        }
      />
      <ExampleContent
        title="Custom Styles"
        code={`\nconst customStyle1: React.CSSProperties = { backgroundColor: '#000000', borderRadius: '20px', fontSize: '24px' };\nconst customStyle2: React.CSSProperties = {\n\tbackgroundColor: '#ffffff',\n\tcolor: '#000000',\n\tborderRadius: '20px',\n\tfontSize: '24px',\n};\n\n<UiButton value="Hello" style={customStyle1} width={150} />\n<UiButton value="World!" style={customStyle2} width={120} />`}
        result={
          <>
            <UiButton value="Hello" style={customStyle1} width={150} />
            <UiButton value="World!" style={customStyle2} width={120} />
          </>
        }
      />
      <ExampleContent
        title="Floating Action Button"
        code={`const [showFab, setShowFab] = useState(false);\nconst handleToggleFab = () => setShowFab(!showFab);\n\n<UiButton value={showFab ? 'close-fab' : 'show-fab'} onClick={handleToggleFab} />\n{showFab && <UiButton fabRound style={{ position: 'fixed', bottom: '50px', right: '50px' }} />}`}
        result={
          <>
            <UiButton value={showFab ? 'close-fab' : 'show-fab'} onClick={handleToggleFab} />
            {showFab && <UiButton fabRound style={{ position: 'fixed', bottom: '50px', right: '50px' }} />}
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default ButtonExample;
