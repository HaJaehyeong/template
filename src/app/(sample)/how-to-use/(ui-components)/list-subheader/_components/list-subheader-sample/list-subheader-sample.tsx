import UiListSubheader from '@/ui/list-subheader/list-subheader';
import { memo } from 'react';
import styles from './list-subheader-sample.module.scss';

const ListSubheaderSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Samples</h4>
        <div className={styles.samples}>
          <div className={styles.item}>
            <UiListSubheader title="Sample & Exmaple" />
            <UiListSubheader title="APP & PAGES" />
            <UiListSubheader title="Ui List Sub Header" />
            <UiListSubheader title="Hello World!" />
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(ListSubheaderSample);
