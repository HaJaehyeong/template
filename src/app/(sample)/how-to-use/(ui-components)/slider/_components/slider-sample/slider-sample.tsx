import UiSlider from '@/ui/slider/slider';
import { memo } from 'react';
import styles from './slider-sample.module.scss';

const SliderSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Variant</h4>
        <div className={styles.variant}>
          <div className={styles.item}>
            <UiSlider value={50} />
            <label>Default</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} variant="discrete" />
            <label>Discrete</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={{ min: 30, max: 60 }} variant="range" />
            <label>Range</label>
          </div>
        </div>

        <hr />
        <h4>Color</h4>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiSlider value={50} color="primary" />
            <label>Primary(Default)</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} color="secondary" />
            <label>Secondary</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} color="info" />
            <label>Info</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} color="success" />
            <label>Success</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} color="warning" />
            <label>Warning</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} color="error" />
            <label>Error</label>
          </div>
        </div>

        <hr />
        <h4>Size</h4>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiSlider value={50} size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} />
            <label>Medium (Default)</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} variant="discrete" size="s" />
            <label>Small</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} variant="discrete" />
            <label>Medium (Default)</label>
          </div>
        </div>

        <hr />
        <h4>State</h4>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiSlider value={50} valueTooltipDisplay />
            <label>Tooltip Display</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} valueLabelDisplay />
            <label>Label Display</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={6} min={2} max={10} valueLabelDisplay />
            <label>set Min, Max</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} step={10} variant="discrete" />
            <label>Step: 10</label>
          </div>
          <div className={styles.item}>
            <UiSlider value={20} step={20} variant="discrete" valueTooltipDisplay />
            <label>Step: 20</label>
          </div>
          <div className={styles.state}>
            <div className={styles.item}>
              <UiSlider
                value={{ min: 100, max: 150 }}
                variant="range"
                min={50}
                max={250}
                minGap={50}
                valueLabelDisplay
                valueTooltipDisplay
              />
              <label>min Gap: 50</label>
            </div>
          </div>
          <div className={styles.item}>
            <UiSlider value={50} disabled />
            <label>Disabled</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(SliderSample);
