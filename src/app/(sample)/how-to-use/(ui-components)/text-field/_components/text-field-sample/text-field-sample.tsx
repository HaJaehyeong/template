import UiTextField from '@/ui/text-field/text-field';
import { memo } from 'react';
import styles from './text-field-sample.module.scss';

const TextFieldSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Variant</h4>
        <h5>Statndard (Default)</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" fieldSize="s" />
            <label>Small</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="Default Value" />
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" helperText="Helper Text" />
            <label>Helper Text</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="1" fieldSuffix="KG" />
            <label>Field Suffix</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="9999.99" fieldPrefix="$" />
            <label>Field Prefix</label>
          </div>
        </div>

        <h5>Outline</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" variant="outline" />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" fieldSize="s" variant="outline" />
            <label>Small</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="Default Value" variant="outline" />
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" helperText="Helper Text" variant="outline" />
            <label>Helper Text</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="1" fieldSuffix="KG" variant="outline" />
            <label>Field Suffix</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="9999.99" fieldPrefix="$" variant="outline" />
            <label>Field Prefix</label>
          </div>
        </div>

        <h5>Filed</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" variant="filed" />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" fieldSize="s" variant="filed" />
            <label>Small</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="Default Value" variant="filed" />
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" helperText="Helper Text" variant="filed" />
            <label>Helper Text</label>
          </div>
        </div>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="1" fieldSuffix="KG" variant="filed" />
            <label>Field Suffix</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" defaultValue="9999.99" fieldPrefix="$" variant="filed" />
            <label>Field Prefix</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <h5>Statndard (Default)</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" isError />
            <label>Error</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" disabled />
            <label>Disabled</label>
          </div>
        </div>

        <h5>Outline</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" variant="outline" isError />
            <label>Error</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" variant="outline" disabled />
            <label>Disabled</label>
          </div>
        </div>

        <h5>Filed</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiTextField label="Text Field" variant="filed" isError />
            <label>Error</label>
          </div>
          <div className={styles.item}>
            <UiTextField label="Text Field" fieldSize="s" variant="filed" disabled />
            <label>Disabled</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(TextFieldSample);
