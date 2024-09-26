import Navigation from './_components/navigation/navigation';
import './ui-components.scss';

type HowToUseLayoutProps = {
  children: React.ReactNode;
};

const HowToUseLayout: React.FC<HowToUseLayoutProps> = ({ children }) => {
  return (
    <div className="ui-component">
      <Navigation />
      <div className="ui-component-children-wrapper">{children}</div>
    </div>
  );
};

export default HowToUseLayout;
