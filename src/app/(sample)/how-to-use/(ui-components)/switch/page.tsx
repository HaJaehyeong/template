import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import SwitchExample from './_components/switch-example/switch-example';
import SwitchSample from './_components/switch-sample/switch-sample';

const SwitchPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<SwitchExample />}>
      <SwitchSample />
    </UiComponentsWrapper>
  );
};

export default SwitchPage;
