import styles from './transfer-list.module.scss';

const UiTransferList: React.FC = () => {
  return (
    <div className={styles.transferListWrapper}>
      <div className={styles.leftList}></div>
      <div className={styles.arrows}></div>
      <div className={styles.rightList}></div>
    </div>
  );
};

export default UiTransferList;
