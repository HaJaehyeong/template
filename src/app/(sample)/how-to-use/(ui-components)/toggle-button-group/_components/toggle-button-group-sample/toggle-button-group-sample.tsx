import UiToggleButtonGroup from '@/ui/toggle-button-group/toggle-button-group';
import UiToggleButton from '@/ui/toggle-button/toggle-button';
import { memo } from 'react';
import styles from './toggle-button-group-sample.module.scss';

const ToggleButtonGroupSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Samples</h4>
        <div className={styles.sample}>
          <div className={styles.item}>
            <UiToggleButtonGroup>
              <UiToggleButton />
              <UiToggleButton />
              <UiToggleButton />
            </UiToggleButtonGroup>
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiToggleButtonGroup>
              <UiToggleButton active />
              <UiToggleButton />
              <UiToggleButton />
            </UiToggleButtonGroup>
            <label>Active</label>
          </div>
          <div className={styles.item}>
            <UiToggleButtonGroup>
              <UiToggleButton disabled />
              <UiToggleButton />
              <UiToggleButton />
            </UiToggleButtonGroup>
            <label>Disabled</label>
          </div>
        </div>
        <div className={styles.sample}>
          <div className={styles.item}>
            <UiToggleButtonGroup>
              <UiToggleButton divider={false} />
              <UiToggleButton divider={false} />
              <UiToggleButton divider={false} />
            </UiToggleButtonGroup>
            <label>Divider: false</label>
          </div>
          <div className={styles.item}>
            <UiToggleButtonGroup size="s">
              <UiToggleButton />
              <UiToggleButton />
              <UiToggleButton />
            </UiToggleButtonGroup>
            <label>Size: small</label>
          </div>
          <div className={styles.item}>
            <UiToggleButtonGroup size="l">
              <UiToggleButton />
              <UiToggleButton />
              <UiToggleButton />
            </UiToggleButtonGroup>
            <label>Size: large</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(ToggleButtonGroupSample);
