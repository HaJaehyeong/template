'use client';
import { ButtonSize } from '@/types/types';
import { RemixiconComponentType, RiStarFill, RiStarLine } from '@remixicon/react';
import { useState } from 'react';
import styles from './rating.module.scss';

type UiRatingProps = {
  rating?: number;
  color?: string;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (rating: number) => void;
} & ({ emptyIcon: RemixiconComponentType; fillIcon: RemixiconComponentType } | { emptyIcon?: never; fillIcon?: never });

const UiRating: React.FC<UiRatingProps> = ({
  rating = 0,
  color,
  size = 'm',
  disabled,
  onClick,
  emptyIcon: EmptyIcon = RiStarLine,
  fillIcon: FillIcon = RiStarFill,
}) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [clickedRating, setClickedRating] = useState<number | null>(null);

  const fillIconForRate = (index: number) => {
    const effectiveRating = hoveredRating !== null ? hoveredRating : clickedRating !== null ? clickedRating : rating;
    return Math.max(0, Math.min(100, 100 - 100 * (effectiveRating / 20 - index)));
  };

  const handleMouseEnter = (index: number) => {
    if (disabled) return;
    setHoveredRating((index + 1) * 20);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoveredRating(null);
  };

  const handleClick = (index: number) => {
    if (disabled) return;

    const newRating = (index + 1) * 20;
    if (onClick) {
      onClick(newRating);
    }
    setClickedRating(newRating);
  };

  return (
    <div className={styles.ratingWrapper}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`${styles.ratingIcon} ${disabled ? styles.disabled : ''} ${styles[size]}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <EmptyIcon
            className={styles.icon}
            color="var(--other-ouline-border)"
            size={size === 's' ? 18 : size === 'm' ? 24 : 30}
          />
          <FillIcon
            className={`${styles.fillIcon} ${disabled ? styles.disabled : ''}`}
            color={color ? color : 'var(--other-rating-active'}
            size={size === 's' ? 18 : size === 'm' ? 24 : 30}
            style={{
              clipPath: `inset(0 ${fillIconForRate(index)}% 0 0)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default UiRating;
