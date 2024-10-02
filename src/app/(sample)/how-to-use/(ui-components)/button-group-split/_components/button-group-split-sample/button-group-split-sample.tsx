import UiButtonGroupSplit from '@/ui/button-group-split/button-group-split';
import UiMenuItem from '@/ui/menu-item/menu-item';
import { memo } from 'react';
import styles from './button-group-split-sample.module.scss';

const MenuItems: React.ReactNode = (
  <>
    <UiMenuItem>first menu item</UiMenuItem>
    <UiMenuItem>second menu item</UiMenuItem>
    <UiMenuItem>third menu item</UiMenuItem>
  </>
);

const ButtonGroupSplitSample: React.FC = () => {
  return (
    <>
      <h4>Type</h4>
      <h5>Horizontal (Default)</h5>
      <div className={styles.type}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More">{MenuItems}</UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <hr />

      <h4>Variant</h4>
      <h5>Default (Default)</h5>
      <div className={styles.variant}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More">{MenuItems}</UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Outlined</h5>
      <div className={styles.variant}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" variant="outlined">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" variant="outlined">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <hr />

      <h4>Size</h4>
      <h5>Small</h5>
      <div className={styles.size}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" size="s">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" size="s">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Medium (Default)</h5>
      <div className={styles.size}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More">{MenuItems}</UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Large</h5>
      <div className={styles.size}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" size="l">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" size="l">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <hr />

      <h4>Color</h4>
      <h5>Primary (Default)</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="primary">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="primary">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Secondary</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="secondary">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="secondary">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Info</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="info">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="info">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Success</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="success">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="success">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Warning</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="warning">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="warning">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>

      <h5>Error</h5>
      <div className={styles.color}>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" color="error">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Horizontal</label>
        </div>
        <div className={styles.item}>
          <UiButtonGroupSplit value="More" type="vertical" color="error">
            {MenuItems}
          </UiButtonGroupSplit>
          <label>Vertical</label>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(ButtonGroupSplitSample);
