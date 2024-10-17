'use client';
import UiTextField from '@/ui/text-field/text-field';
import { RiEyeCloseLine, RiEyeLine } from '@remixicon/react';
import { useState } from 'react';
import ExampleContent from '../../../_components/example-content/example-content';
import PropsTable from '../../../_components/props-table/props-table';

const TextFieldProps = [
  {
    Name: 'label',
    Type: 'string',
    Default: '-',
    Description: 'Input에 표시될 Label',
  },
  {
    Name: 'type',
    Type: "'text' | 'password'",
    Default: 'text',
    Description: 'Input field type',
  },
  {
    Name: 'width',
    Type: 'number',
    Default: '220',
    Description: 'Input field width (px)',
  },
  {
    Name: 'variant',
    Type: "'standard' | 'outline' | 'filed'",
    Default: 'standard',
    Description: 'Input field variant',
  },
  {
    Name: 'defaultValue',
    Type: 'string',
    Default: '-',
    Description: 'Input field의 기본 표기값',
  },
  {
    Name: 'helperText',
    Type: 'string',
    Default: '-',
    Description: 'Input field 하단에 표시할 Helper Text',
  },
  {
    Name: 'fieldSize',
    Type: "'s' | 'm'",
    Default: 'm',
    Description: 'Input field size (small: s, medium: m)',
  },
  {
    Name: 'fieldSuffix',
    Type: 'React.ReactNode | string',
    Default: '-',
    Description: 'Input field 뒷부분에 표시할 Suffix',
  },
  {
    Name: 'fieldPrefix',
    Type: 'React.ReactNode | string',
    Default: '-',
    Description: 'Input field 앞부분에 표시할 Prefix',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Default: 'false',
    Description: 'Input field disabled',
  },
  {
    Name: 'isError',
    Type: 'boolean',
    Default: 'false',
    Description: 'Input field error state',
  },
  {
    Name: '(other) input props',
    Type: 'InputHTMLAttributes<HTMLInputElement>',
    Default: '-',
    Description: 'input element attributes',
  },
];

const comment = `
  로그인 예시는 Form 사용없이 상태관리로 작성한 예시입니다.
  디자인, 추가 props 외에는 input과 동일합니다.
`;

const TextFieldExample: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h4>Example</h4>
      <ExampleContent
        title="Variant"
        code={`<UiTextField label="Label" />\n<UiTextField label="Label" variant="outline" />\n<UiTextField label="Label" variant="filed" />`}
        result={
          <>
            <UiTextField label="Label" />
            <UiTextField label="Label" variant="outline" />
            <UiTextField label="Label" variant="filed" />
          </>
        }
      />
      <ExampleContent
        title="State"
        code={`<UiTextField label="Error" isError />\n<UiTextField label="Disabled" disabled />`}
        result={
          <>
            <UiTextField label="Error" isError />
            <UiTextField label="Disabled" disabled />
          </>
        }
      />
      <ExampleContent
        title="Other"
        code={`<UiTextField label="Label" fieldSize="s" />\n<UiTextField label="Label" defaultValue={'Default Value'} />\n<UiTextField label="Label" helperText="Help Me" />\n<UiTextField label="Label" fieldPrefix="$" />\n<UiTextField label="Label" fieldPrefix={<RiEyeLine size={16} />} />\n<UiTextField label="Label" fieldSuffix="%" />\n<UiTextField label="Label" fieldSuffix={<RiEyeLine size={16} />} />`}
        result={
          <>
            <UiTextField label="Label" fieldSize="s" />
            <UiTextField label="Label" defaultValue={'Default Value'} />
            <UiTextField label="Label" helperText="Help Me" />
            <UiTextField label="Label" fieldPrefix="$" />
            <UiTextField label="Label" fieldPrefix={<RiEyeLine size={16} />} />
            <UiTextField label="Label" fieldSuffix="%" />
            <UiTextField label="Label" fieldSuffix={<RiEyeLine size={16} />} />
          </>
        }
      />

      <hr />

      <h4>Props</h4>
      <PropsTable datas={TextFieldProps} />

      <hr />

      <h4>Example Usage</h4>
      <ExampleContent
        title="Login"
        code={`const [id, setId] = useState('');\nconst [password, setPassword] = useState('');\nconst [showPassword, setShowPassword] = useState(false);\n\n<UiTextField\n\tlabel="ID"\n\ttype="text"\n\tvalue={id}\n\tonChange={(e) => setId(e.target.value)}\n\tisError={id === ''}\n\thelperText={id === '' ? 'ID를 입력해주세요.' : ''}\n/>\n<UiTextField\n\tlabel="PASSWORD"\n\tvalue={password}\n\ttype={showPassword ? 'text' : 'password'}\n\tfieldSuffix={\n\t\tshowPassword ? (\n\t\t\t<RiEyeCloseLine size={16} onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} />\n\t\t) : (\n\t\t\t<RiEyeLine size={16} onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />\n\t\t)\n\t}\n\tonChange={(e) => setPassword(e.target.value)}\n\tisError={password === ''}\n\thelperText={password === '' ? 'PASSWORD를 입력해주세요.' : ''}\n/>\n<span>ID: {id}</span>\n<span>Password: {password}</span>`}
        result={
          <>
            <UiTextField
              label="ID"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              isError={id === ''}
              helperText={id === '' ? 'ID를 입력해주세요.' : ''}
            />
            <UiTextField
              label="PASSWORD"
              value={password}
              type={showPassword ? 'text' : 'password'}
              fieldSuffix={
                showPassword ? (
                  <RiEyeCloseLine size={16} onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} />
                ) : (
                  <RiEyeLine size={16} onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
                )
              }
              onChange={(e) => setPassword(e.target.value)}
              isError={password === ''}
              helperText={password === '' ? 'PASSWORD를 입력해주세요.' : ''}
            />
            <span>ID: {id}</span>
            <span>Password: {password}</span>
          </>
        }
      />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </>
  );
};

export default TextFieldExample;
