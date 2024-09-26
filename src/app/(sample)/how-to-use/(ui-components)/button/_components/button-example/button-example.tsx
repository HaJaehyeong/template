import CodeEditor from '../../../_components/code-editor/code-editor';

const ButtonExample: React.FC = () => {
  return (
    <CodeEditor
      code={`<Editor\n\tclassName={styles.editor}\n\tvalue={code}\n\tonValueChange={(code) => setCode(code)}\n\thighlight={(code) => highlight(code, languages.javascript, 'typescript')}\n\tpadding={20}\n/>`}
    />
  );
};

export default ButtonExample;
