'use client';
import UiSwitch from '@/ui/switch/switch';
import { memo } from 'react';
import styles from './switch-sample.module.scss';

const SwitchSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Colors</h4>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiSwitch />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="secondary" />
            <label>Secondary</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="info" />
            <label>Info</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="success" />
            <label>Success</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="warning" />
            <label>Warning</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="error" />
            <label>Error</label>
          </div>
          <div className={styles.item}>
            <UiSwitch color="inactive" />
            <label>Inactive</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <div className={styles.color} style={{ marginBottom: '20px' }}>
          <div className={styles.item}>
            <UiSwitch size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiSwitch size="s" label="Label" />
            <label>Small</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiSwitch />
            <label>Medium (Default)</label>
          </div>
          <div className={styles.item}>
            <UiSwitch label="Label" />
            <label>Medium (with Label)</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiSwitch disabled />
            <label>Disabled</label>
          </div>
          <div className={styles.item}>
            <UiSwitch label="Disabled" disabled />
            <label>Disabled</label>
          </div>

          <div className={styles.item}>
            <UiSwitch checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiSwitch label="Checked" checked />
            <label>Checked</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(SwitchSample);
