type ExampleWrapperProps = {
  open: boolean;
  children: React.ReactNode;
};

const ExampleWrapper: React.FC<ExampleWrapperProps> = ({ open, children }) => {
  return open ? <div className="example-wrapper paper elevated square-false">{children}</div> : <></>;
};

export default ExampleWrapper;
