'use client';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiSelect from '@/ui/select/select';
import { memo } from 'react';
import styles from './select-sample.module.scss';

const SelectSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Variant</h4>
        <h5>Standard (Default)</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiSelect label="Select Item">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Standard</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" defaultValue={1}>
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" helperText="Helper Text">
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Helper Text</label>
          </div>
        </div>
        <h5>Outline</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Outline</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline" defaultValue={1}>
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline" helperText="Helper Text">
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Helper Text</label>
          </div>
        </div>
        <h5>Filed</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Filed</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed" defaultValue={1}>
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Has Value</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed" helperText="Helper Text">
              <UiMenuItem value={1}>First Item</UiMenuItem>
              <UiMenuItem value={2}>Second Item</UiMenuItem>
              <UiMenuItem value={3}>Third Item</UiMenuItem>
            </UiSelect>
            <label>Helper Text</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <h5>Medium (Default)</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiSelect label="Select Item">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Standard</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Outline</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Filed</label>
          </div>
        </div>
        <h5>Small</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiSelect label="Select Item" size="s">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Standard</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline" size="s">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Outline</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed" size="s">
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Filed</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <h5>Error</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiSelect label="Select Item" isError>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Standard</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline" isError>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Outline</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed" isError>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Filed</label>
          </div>
        </div>
        <h5>Disabled</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiSelect label="Select Item" disabled>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Standard</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="outline" disabled>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Outline</label>
          </div>
          <div className={styles.item}>
            <UiSelect label="Select Item" variant="filed" disabled>
              <UiMenuItem>First Item</UiMenuItem>
              <UiMenuItem>Second Item</UiMenuItem>
              <UiMenuItem>Third Item</UiMenuItem>
            </UiSelect>
            <label>Filed</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(SelectSample);
