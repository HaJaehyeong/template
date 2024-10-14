'use client';
import UiRadio from '@/ui/radio/radio';
import { memo, useState } from 'react';
import styles from './radio-sample.module.scss';

const RadioSample: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <h4>Label</h4>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiRadio checked={checked} onChange={() => setChecked(!checked)} />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiRadio label="Label" checked={checked} onChange={() => setChecked(!checked)} />
            <label>With Label</label>
          </div>
        </div>

        <hr />

        <h4>Colors</h4>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiRadio checked />
            <label>Primary</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked color="secondary" />
            <label>Secondary</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked color="info" />
            <label>Info</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked color="success" />
            <label>Success</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked color="warning" />
            <label>Warning</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked color="error" />
            <label>Error</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiRadio checked size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked size="m" />
            <label>Medium</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked size="l" />
            <label>Info</label>
          </div>
        </div>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiRadio label="Small" checked size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiRadio label="Medium" checked size="m" />
            <label>Medium</label>
          </div>
          <div className={styles.item}>
            <UiRadio label="Large" checked size="l" />
            <label>Info</label>
          </div>
        </div>

        <h4>State</h4>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiRadio checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiRadio label="Checked" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiRadio checked disabled />
            <label>Disabled</label>
          </div>
          <div className={styles.item}>
            <UiRadio label="Disabled" checked disabled />
            <label>Disabled</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(RadioSample);
