'use client';
import UiButton from '@/ui/button/button';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-jsx';
import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import styles from './code-editor.module.scss';
import './prism-okaidia.css';

type CodeEditorProps = {
  code: string;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [codeState, setCodeState] = useState(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeState).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    code && (
      <div className={styles.editorWrapper}>
        <Editor
          className={styles.editor}
          textareaClassName={styles.textarea}
          value={codeState}
          onValueChange={(codeState) => setCodeState(codeState)}
          highlight={(codeState) => highlight(codeState, languages.jsx, 'jsx')}
          padding={20}
          readOnly
        />
        <UiButton
          value={isCopied ? '복사되었습니다!' : '코드 복사'}
          size="s"
          color="secondary"
          onClick={handleCopy}
          style={{ position: 'absolute', top: 10, right: 50 }}
        />
      </div>
    )
  );
};

export default CodeEditor;
