import styles from './list-subheader.module.scss';

type UiListSubheaderProps = {
  title: string;
};

const UiListSubheader: React.FC<UiListSubheaderProps> = ({ title }) => {
  return <div className={`${styles.listSubheaderWrapper} caption`}>{title}</div>;
};

export default UiListSubheader;
