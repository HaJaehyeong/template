'use client';
import { useState } from 'react';
import UiButton from '../button/button';
import UiCheckBox from '../checkbox/checkbox';
import styles from './transfer-list.module.scss';

type Item = {
  label: string;
  checked: boolean;
};

const UiTransferList: React.FC = () => {
  const [leftItems, setLeftItems] = useState<Item[]>([
    { label: 'List item 1', checked: false },
    { label: 'List item 2', checked: false },
    { label: 'List item 3', checked: false },
    { label: 'List item 4', checked: false },
  ]);

  const [rightItems, setRightItems] = useState<Item[]>([
    { label: 'List item 5', checked: false },
    { label: 'List item 6', checked: false },
    { label: 'List item 7', checked: false },
    { label: 'List item 8', checked: false },
  ]);

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
      <div className={`${styles.leftList} popover square-false shadow6`}>
        {leftItems.map((item, index) => (
          <div key={index} className={styles.item} onClick={() => handleItemClick(index, 'left')}>
            <UiCheckBox checked={item.checked} />
            <span>{item.label}</span>
          </div>
        ))}
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
      <div className={`${styles.rightList} popover square-false shadow6`}>
        {rightItems.map((item, index) => (
          <div key={index} className={styles.item} onClick={() => handleItemClick(index, 'right')}>
            <UiCheckBox checked={item.checked} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiTransferList;
