'use client';
import UiRating from '@/ui/rating/rating';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiHeart2Fill, RiHeart2Line } from '@remixicon/react';
import { memo } from 'react';
import styles from './rating-sample.module.scss';

const RatingSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Rating</h4>
        <div className={styles.rating}>
          <div className={styles.item}>
            <UiRating rating={20} />
            <label>rating: 20</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={100} />
            <label>rating: 100</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={0} />
            <label>rating: 0</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={50} />
            <label>rating: 50</label>
          </div>
        </div>

        <hr />

        <h4>Colors</h4>
        <div className={styles.color}>
          <div className={styles.item}>
            <UiRating rating={60} color="blue" />
            <label>blue</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={60} color="#00ff00" />
            <label>#00ff00</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={60} color="rgb(255, 0, 0)" />
            <label>rgb(255, 0, 0)</label>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiRating rating={60} size="s" />
            <label>small</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={60} size="m" />
            <label>Medium (default)</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={60} size="l" />
            <label>Large</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiRating rating={60} disabled />
            <label>Disabled</label>
          </div>
        </div>

        <hr />

        <h4>Other Icons</h4>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiRating rating={60} emptyIcon={RiHeart2Line} fillIcon={RiHeart2Fill} color="red" />
            <label>Heart</label>
          </div>
          <div className={styles.item}>
            <UiRating rating={60} emptyIcon={RiCheckboxBlankCircleLine} fillIcon={RiCheckboxBlankCircleFill} />
            <label>Circle</label>
          </div>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(RatingSample);
