'use client';
import { useState } from 'react';
import UiButton from '../button/button';
import UiCheckBox from '../checkbox/checkbox';
import styles from './transfer-list.module.scss';

type UiTransferListProps =
  | {
      type: 'enhanced';
      leftDatas?: string[];
      rightDatas?: string[];
      leftTitle: string;
      leftSubTitle?: string;
      rightTitle: string;
      rightSubTitle?: string;
    }
  | {
      type?: 'default';
      leftDatas?: string[];
      rightDatas?: string[];
      leftTitle?: never;
      leftSubTitle?: never;
      rightTitle?: never;
      rightSubTitle?: never;
    };

type Item = {
  label: string;
  checked: boolean;
};

const UiTransferList: React.FC<UiTransferListProps> = ({
  type = 'default',
  leftDatas = [],
  rightDatas = [],
  leftTitle,
  leftSubTitle,
  rightTitle,
  rightSubTitle,
}) => {
  const [leftItems, setLeftItems] = useState<Item[]>(
    leftDatas.map((data) => {
      return { label: data, checked: false };
    })
  );

  const [rightItems, setRightItems] = useState<Item[]>(
    rightDatas.map((data) => {
      return { label: data, checked: false };
    })
  );

  const handleItemClick = (index: number, listType: 'left' | 'right') => {
    if (listType === 'left') {
      setLeftItems((prevItems) =>
        prevItems.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
      );
    } else {
      setRightItems((prevItems) =>
        prevItems.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
      );
    }
  };

  const handleToLeftTransferClick = () => {
    const checkedRightItems = rightItems.filter((item) => item.checked);
    const unCheckedRightItems = rightItems.filter((item) => !item.checked);
    setRightItems(unCheckedRightItems);
    setLeftItems((prevItems) => prevItems.concat(checkedRightItems));
  };

  const handleToRightTransferClick = () => {
    const checkedLeftItems = leftItems.filter((item) => item.checked);
    const unCheckedLeftItems = leftItems.filter((item) => !item.checked);
    setLeftItems(unCheckedLeftItems);
    setRightItems((prevItems) => prevItems.concat(checkedLeftItems));
  };

  const handleToLeftAllItemsClick = () => {
    setLeftItems((prevItems) => prevItems.concat(rightItems));
    setRightItems([]);
  };

  const handleToRightAllItemsClick = () => {
    setRightItems((prevItems) => prevItems.concat(leftItems));
    setLeftItems([]);
  };

  return (
    <div className={styles.transferListWrapper}>
      <div className={`${styles.leftList} ${type === 'enhanced' ? styles.enhanced : ''} popover square-false shadow6`}>
        {type === 'enhanced' && (
          <div className={`${styles.item} ${styles.enhancedItem}`}>
            <UiCheckBox />
            <div className={styles.title}>
              <span>{leftTitle}</span>
              {leftSubTitle && <span className={styles.sub}>{leftSubTitle}</span>}
            </div>
          </div>
        )}
        <div className={`${styles.itemsWrapper} ${type === 'enhanced' ? styles.enhancedItemWrapper : ''}`}>
          {leftItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${type === 'enhanced' ? styles.enhanced : ''}`}
              onClick={() => handleItemClick(index, 'left')}
            >
              <UiCheckBox checked={item.checked} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrows}>
        <UiButton
          variant="outlined"
          value=">>"
          size="s"
          width={64}
          disabled={leftItems.length === 0}
          onClick={handleToRightAllItemsClick}
        />
        <UiButton
          variant="outlined"
          value=">"
          size="s"
          width={64}
          disabled={leftItems.every((item) => !item.checked)}
          onClick={handleToRightTransferClick}
        />
        <UiButton
          variant="outlined"
          value="<"
          size="s"
          width={64}
          disabled={rightItems.every((item) => !item.checked)}
          onClick={handleToLeftTransferClick}
        />
        <UiButton
          variant="outlined"
          value="<<"
          size="s"
          width={64}
          disabled={rightItems.length === 0}
          onClick={handleToLeftAllItemsClick}
        />
      </div>
      <div className={`${styles.rightList} ${type === 'enhanced' ? styles.enhanced : ''} popover square-false shadow6`}>
        {type === 'enhanced' && (
          <div className={`${styles.item} ${styles.enhancedItem}`}>
            <UiCheckBox />
            <div className={styles.title}>
              <span>{rightTitle}</span>
              {rightSubTitle && <span className={styles.sub}>{rightSubTitle}</span>}
            </div>
          </div>
        )}
        <div className={`${styles.itemsWrapper} ${type === 'enhanced' ? styles.enhancedItemWrapper : ''}`}>
          {rightItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} ${type === 'enhanced' ? styles.enhanced : ''}`}
              onClick={() => handleItemClick(index, 'right')}
            >
              <UiCheckBox checked={item.checked} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UiTransferList;
