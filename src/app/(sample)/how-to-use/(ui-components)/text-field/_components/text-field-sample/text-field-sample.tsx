import UiButton from '@/ui/button/button';
import { memo } from 'react';
import styles from './text-field-sample.module.scss';

const TextFieldSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Variant</h4>
        <h5>Contained (Default)</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiButton value="Button" />
            <label>Default</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(TextFieldSample);
