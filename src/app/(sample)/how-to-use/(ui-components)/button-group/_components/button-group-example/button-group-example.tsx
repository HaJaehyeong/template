'use client';
import UiButtonGroup from '@/ui/button-group/button-group';
import UiButton from '@/ui/button/button';
import CodeEditor from '../../../_components/code-editor/code-editor';
import PropsTable from '../../../_components/props-table/props-table';
import styles from './button-group-example.module.scss';

const ButtonGroupProps = [
  {
    Name: 'children',
    Type: 'React.ReactNode',
    Default: '-',
    Description: '버튼 그룹에 표시할 버튼',
  },
  {
    Name: 'type',
    Type: "'horizontal' | 'vertical'",
    Default: "'horizontal'",
    Description: '버튼 그룹의 정렬 방향',
  },
  {
    Name: 'variant',
    Type: "'contained' | 'outlined' | 'text'",
    Default: "'contained'",
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
  - Button Group에 있는 Props들을 Button의 Props에 덮어씌우기 때문에 이를 인지하고 사용해야 합니다.
    - 예를 들어,
      -----------------------------------
      <UiButtonGroup variant="outlined">
        <UiButton variant="priamry"/>
      </UiButtonGroup>
      -----------------------------------
      위와 같이 작성하면, Group의 outlined이 Button에 적용됩니다.
`;

const ButtonGroupExample: React.FC = () => {
  return (
    <div className={styles.exampleWrapper}>
      <h4>Example</h4>
      <h5>Variant</h5>
      <CodeEditor
        code={`<UiButtonGroup>\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>`}
      />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>
          <UiButtonGroup>
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>

          <UiButtonGroup variant="outlined">
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>

          <UiButtonGroup variant="text">
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>
        </div>
      </div>

      <h4>Props</h4>
      <PropsTable datas={ButtonGroupProps} />

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </div>
  );
};

export default ButtonGroupExample;
