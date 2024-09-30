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
      |<UiButtonGroup variant="outlined"> |
      |  <UiButton variant="priamry"/>    |
      |</UiButtonGroup>                   |
       -----------------------------------
      위와 같이 작성하면, Group의 outlined이 Button에 적용됩니다.
`;

const ButtonGroupExample: React.FC = () => {
  return (
    <div className={styles.exampleWrapper}>
      <h4>Example</h4>

      <h5>Type</h5>
      <CodeEditor
        code={`<UiButtonGroup type="horizontal">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup type="vertical">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>`}
      />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>
          <UiButtonGroup type="horizontal">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>

          <UiButtonGroup type="vertical">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
        </div>
      </div>

      <h5>Variant</h5>
      <CodeEditor
        code={`<UiButtonGroup>\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n\t<UiButton value="Example" />\n</UiButtonGroup>`}
      />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>
          <span>1.</span>
          <UiButtonGroup>
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>
        </div>
        <div className={styles.results}>
          <span>2.</span>
          <UiButtonGroup variant="outlined">
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>
        </div>
        <div className={styles.results}>
          <span>3.</span>
          <UiButtonGroup variant="text">
            <UiButton value="Button" />
            <UiButton value="Group" />
            <UiButton value="Example" />
          </UiButtonGroup>
        </div>
      </div>

      <h5>Color</h5>
      <CodeEditor
        code={`<UiButtonGroup>\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup color="secondary">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined" color="info">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined" color="success">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text" color="warning">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text" color="error">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>`}
      />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>
          <UiButtonGroup>
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
          <UiButtonGroup color="secondary">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
          <UiButtonGroup variant="outlined" color="info">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
        </div>
        <div className={styles.results}>
          <UiButtonGroup variant="outlined" color="success">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
          <UiButtonGroup variant="text" color="warning">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
          <UiButtonGroup variant="text" color="error">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
        </div>
      </div>

      <h5>Size</h5>
      <CodeEditor
        code={`<UiButtonGroup size="s">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined" size="s">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text" size="s">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup size="l">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="outlined" size="l">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>\n\n<UiButtonGroup variant="text" size="l">\n\t<UiButton value="Button" />\n\t<UiButton value="Group" />\n</UiButtonGroup>`}
      />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>
          <UiButtonGroup size="s">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>

          <UiButtonGroup variant="outlined" size="s">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>

          <UiButtonGroup variant="text" size="s">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
        </div>
        <div className={styles.results}>
          <UiButtonGroup size="l">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>

          <UiButtonGroup variant="outlined" size="l">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>

          <UiButtonGroup variant="text" size="l">
            <UiButton value="Button" />
            <UiButton value="Group" />
          </UiButtonGroup>
        </div>
      </div>

      <h4>Props</h4>
      <PropsTable datas={ButtonGroupProps} />

      <hr />

      <h4>Example Usage</h4>
      <span>UiButton과 동일 (UiButton을 Group으로 감싸서 사용)</span>

      <hr />
      <h4>Comment</h4>
      <pre>{comment}</pre>
    </div>
  );
};

export default ButtonGroupExample;
