'use client';
import UiButtonGroup from '@/ui/button-group/button-group';
import UiButton from '@/ui/button/button';
import { memo } from 'react';
import styles from './button-group-sample.module.scss';

const ButtonGroupSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Type</h4>
        <h5>Horizontal (Default)</h5>
        <div className={styles.type}>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>

        <h5>Vertical</h5>
        <div className={styles.type}>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>

        <hr />

        <h4>Variant</h4>
        <h5>Contained (Default)</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Horizontal</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Vertical</label>
          </div>
        </div>

        <h5>Outlined</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiButtonGroup variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Horizontal</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup variant="outlined" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Vertical</label>
          </div>
        </div>

        <h5>Text</h5>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiButtonGroup variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Horizontal</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup variant="text" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>Vertical</label>
          </div>
        </div>

        <hr />

        <h4>Color</h4>
        <h5>Primary (Default)</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>

        <h5>Secondary</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="secondary">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="secondary" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="secondary" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="secondary" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="secondary" type="vertical" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="secondary" type="vertical" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>

        <h5>Success</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="success">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="success" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="success" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="success" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="success" type="vertical" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="success" type="vertical" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>

        <h5>Warning</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="warning">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="warning" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="warning" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="warning" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="warning" type="vertical" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="warning" type="vertical" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>

        <h5>Error</h5>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="error">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="error" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="error" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiButtonGroup color="error" type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="error" type="vertical" variant="outlined">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup color="error" type="vertical" variant="text">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>Text</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <h5>Small</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup size="s">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup size="s">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" size="s">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" size="s">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>

        <h5>Medium (Default)</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup>
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>

        <h5>Large</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup size="l">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup size="l">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" size="l">
              <UiButton value="Button" />
              <UiButton value="Group" />
            </UiButtonGroup>
            <label>2 Children</label>
          </div>
          <div className={styles.item}>
            <UiButtonGroup type="vertical" size="l">
              <UiButton value="Button" />
              <UiButton value="Group" />
              <UiButton value="Sample" />
            </UiButtonGroup>
            <label>3 Children</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(ButtonGroupSample);
