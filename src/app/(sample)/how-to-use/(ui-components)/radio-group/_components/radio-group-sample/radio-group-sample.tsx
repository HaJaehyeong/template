'use client';
import UiRadioGroup from '@/ui/radio-group/radio-group';
import UiRadio from '@/ui/radio/radio';
import { memo, useState } from 'react';
import styles from './radio-group-sample.module.scss';

const RadioGroupSample: React.FC = () => {
  const [checkedChild, setCheckedChild] = useState('1');
  return (
    <>
      <div>
        <h4>Radio Group</h4>
        <div className={styles.itemWrapper}>
          <div className={styles.item}>
            <UiRadioGroup name="group" className={styles.radioGroup}>
              <UiRadio
                label="child1"
                value="1"
                checked={checkedChild === '1'}
                onChange={(e) => setCheckedChild(e.target.value)}
              />
              <UiRadio
                label="child2"
                value="2"
                checked={checkedChild === '2'}
                onChange={(e) => setCheckedChild(e.target.value)}
              />
              <UiRadio
                label="child3"
                value="3"
                checked={checkedChild === '3'}
                onChange={(e) => setCheckedChild(e.target.value)}
              />
            </UiRadioGroup>
            <label>Group</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(RadioGroupSample);
