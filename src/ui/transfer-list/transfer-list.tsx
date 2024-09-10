'use client';
import { useCallback, useState } from 'react';
import UiButton from '../button/button';
import UiCheckBox from '../checkbox/checkbox';
import styles from './transfer-list.module.scss';

type Item = {
  label: string;
  checked: boolean;
};

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

const UiTransferList: React.FC<UiTransferListProps> = ({
  type = 'default',
  leftDatas = [],
  rightDatas = [],
  leftTitle,
  leftSubTitle,
  rightTitle,
  rightSubTitle,
}) => {
  const initialItems = (datas: string[]): Item[] => datas.map((data) => ({ label: data, checked: false }));

  const [leftItems, setLeftItems] = useState<Item[]>(initialItems(leftDatas));
  const [rightItems, setRightItems] = useState<Item[]>(initialItems(rightDatas));

  const toggleItemCheck = useCallback((index: number, listType: 'left' | 'right') => {
    const updateItems = (items: Item[], idx: number) =>
      items.map((item, i) => (i === idx ? { ...item, checked: !item.checked } : item));

    listType === 'left'
      ? setLeftItems((prevItems) => updateItems(prevItems, index))
      : setRightItems((prevItems) => updateItems(prevItems, index));
  }, []);

  const moveItems = useCallback(
    (
      from: Item[],

      setFrom: React.Dispatch<React.SetStateAction<Item[]>>,
      setTo: React.Dispatch<React.SetStateAction<Item[]>>,
      all = false
    ) => {
      const [checkedItems, uncheckedItems] = all
        ? [from, []]
        : from.reduce<[Item[], Item[]]>(
            ([checked, unchecked], item) => {
              (item.checked ? checked : unchecked).push(item);
              return [checked, unchecked];
            },
            [[], []]
          );

      setFrom(uncheckedItems);
      setTo((prevItems) => prevItems.concat(checkedItems));
    },
    []
  );

  const handleToLeftTransferClick = useCallback(
    () => moveItems(rightItems, setRightItems, setLeftItems),
    [rightItems, leftItems, moveItems]
  );

  const handleToRightTransferClick = useCallback(
    () => moveItems(leftItems, setLeftItems, setRightItems),
    [leftItems, rightItems, moveItems]
  );

  const handleToLeftAllItemsClick = useCallback(
    () => moveItems(rightItems, setRightItems, setLeftItems, true),
    [rightItems, leftItems, moveItems]
  );

  const handleToRightAllItemsClick = useCallback(
    () => moveItems(leftItems, setLeftItems, setRightItems, true),
    [leftItems, rightItems, moveItems]
  );

  const renderItems = useCallback(
    (items: Item[], listType: 'left' | 'right') =>
      items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${type === 'enhanced' ? styles.enhanced : ''}`}
          onClick={() => toggleItemCheck(index, listType)}
        >
          <UiCheckBox checked={item.checked} />
          <span>{item.label}</span>
        </div>
      )),
    [toggleItemCheck, type]
  );

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
          {renderItems(leftItems, 'left')}
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
          {renderItems(rightItems, 'right')}
        </div>
      </div>
    </div>
  );
};

export default UiTransferList;
