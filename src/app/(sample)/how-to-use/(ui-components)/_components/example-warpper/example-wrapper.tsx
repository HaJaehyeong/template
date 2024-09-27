type ExampleWrapperProps = {
  open: boolean;
  children: React.ReactNode;
};

const ExampleWrapper: React.FC<ExampleWrapperProps> = ({ open, children }) => {
  return open ? (
    <div className="example-wrapper">
      <div className="example paper elevated square-false">{children}</div>
    </div>
  ) : (
    <></>
  );
};

export default ExampleWrapper;
