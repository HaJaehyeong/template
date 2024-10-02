import UiCheckBox from '@/ui/checkbox/checkbox';
import { memo } from 'react';
import styles from './checkbox-sample.module.scss';

const CheckboxSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Variant</h4>
        <h5>Default</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiCheckBox />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox checked />
            <label>Checked</label>
          </div>
        </div>
        <h5>With Label</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiCheckBox label="Label" />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked />
            <label>Checked</label>
          </div>
        </div>

        <hr />

        <h4>Color</h4>
        <h5>Primary (Default)</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox />
            <label>Primary</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Secondary</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox color="secondary" />
            <label>Secondary</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" color="secondary" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="secondary" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="secondary" label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Info</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox color="info" />
            <label>Info</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" color="info" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="info" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="info" label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Success</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox color="success" />
            <label>Success</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" color="success" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="success" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="success" label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Warning</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox color="warning" />
            <label>Warning</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" color="warning" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="warning" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="warning" label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Error</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiCheckBox color="error" />
            <label>Error</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" color="error" />
            <label>With Label</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="error" checked />
            <label>Checked</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox color="error" label="Label" checked />
            <label>With Label</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <h5>Small</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiCheckBox size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" size="s" checked />
            <label>Checked</label>
          </div>
        </div>
        <h5>Medium (Default)</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiCheckBox />
            <label>Medium</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked />
            <label>Checked</label>
          </div>
        </div>
        <h5>Large</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiCheckBox size="l" />
            <label>Large</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" size="l" checked />
            <label>Checked</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <h5>Default</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiCheckBox />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" />
            <label>With Label</label>
          </div>
        </div>
        <h5>Checked</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiCheckBox checked />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked />
            <label>With Label</label>
          </div>
        </div>
        <h5>Indeterminate</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiCheckBox checked indeterminate />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked indeterminate />
            <label>With Label</label>
          </div>
        </div>
        <h5>Disabled</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiCheckBox disabled />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" disabled />
            <label>With Label</label>
          </div>
        </div>

        <h5>Checked Disabled</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiCheckBox checked disabled />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiCheckBox label="Label" checked disabled />
            <label>With Label</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(CheckboxSample);
