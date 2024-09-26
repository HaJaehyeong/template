import styles from './example-wrapper.module.scss';

type ExampleWrapperProps = {
  open: boolean;
};

const ExampleWrapper: React.FC<ExampleWrapperProps> = ({ open }) => {
  return (
    <div className="example-wrapper">
      <div className={`${styles.example} paper elevated square-false`}>댓뀽</div>
    </div>
  );
};

export default ExampleWrapper;
