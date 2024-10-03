import UiListItem from '@/ui/list-item/list-item';
import { RiHome2Line } from '@remixicon/react';
import { memo } from 'react';
import styles from './list-item-sample.module.scss';

const ListItemSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Samples</h4>
        <h5>width: 300px</h5>
        <div className={styles.samples}>
          <div className={styles.item}>
            <UiListItem name={'Main'} />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiListItem name={'Main'} icon={RiHome2Line} />
            <label>Icon</label>
          </div>
          <div className={styles.item}>
            <UiListItem name={'Main'} icon={RiHome2Line} active />
            <label>Active</label>
          </div>
          <div className={styles.item} style={{ width: '300px' }}>
            <UiListItem name={'Main'} icon={RiHome2Line} arrow />
            <label>Arrow</label>
          </div>
          <div className={styles.item} style={{ width: '300px' }}>
            <UiListItem name={'Main'} icon={RiHome2Line} active arrow />
            <label>Active + Arrow</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(ListItemSample);
