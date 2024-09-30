import CodeEditor from '../code-editor/code-editor';
import styles from './example-content.module.scss';

type ExampleContentProps = {
  title: string;
  code: string;
  result: React.ReactNode;
};

const ExampleContent: React.FC<ExampleContentProps> = ({ title, code, result }) => {
  return (
    <div>
      <h5>{title}</h5>
      <CodeEditor code={code} />
      <div className={styles.resultsWrapper}>
        <div className={styles.results}>{result}</div>
      </div>
    </div>
  );
};

export default ExampleContent;
