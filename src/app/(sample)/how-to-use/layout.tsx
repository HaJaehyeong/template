import '../../globals.scss';
import ExampleWrapper from './(ui-components)/_components/example-warpper/example-wrapper';
import Navigation from './_components/navigation/navigation';

type HowToUseLayoutProps = {
  children: React.ReactNode;
};

const HowToUseLayout: React.FC<HowToUseLayoutProps> = ({ children }) => {
  return (
    <div className="ui-component">
      <Navigation />
      {children}
      <ExampleWrapper open />
    </div>
  );
};

export default HowToUseLayout;
