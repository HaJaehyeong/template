type ExampleWrapperProps = {
  open: boolean;
};

const ExampleWrapper: React.FC<ExampleWrapperProps> = ({ open }) => {
  return open ? <div className="example-wrapper paper elevated square-false">댓뀽</div> : <></>;
};

export default ExampleWrapper;
