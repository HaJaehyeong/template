import UiTransferList from '@/ui/transfer-list/transfer-list';
import { memo } from 'react';
import styles from './transfer-list-sample.module.scss';

const TransferListSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Samples</h4>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTransferList leftDatas={['List item1', 'List item2', 'List item3', 'List item4']} />
            <label>Default Type</label>
          </div>
          <div className={styles.item}>
            <UiTransferList
              type="enhanced"
              leftTitle="Choises"
              rightTitle="Chosen"
              leftDatas={['List item', 'List item', 'List item', 'List item']}
            />
            <label>Enhanced Type</label>
          </div>
          <div className={styles.item}>
            <UiTransferList
              type="enhanced"
              leftTitle="Choises"
              leftSubTitle=">_ <"
              rightTitle="Chosen"
              rightSubTitle="ㅇㅂㅇ"
              leftDatas={['List item', 'List item', 'List item', 'List item']}
            />
            <label>Enhanced Type: sub title</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(TransferListSample);
