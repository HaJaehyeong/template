import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ToggleButtonGroupExample from './_components/toggle-button-group-example/toggle-button-group-example';
import ToggleButtonGroupSample from './_components/toggle-button-group-sample/toggle-button-group-sample';

const ToggleButtonGroupPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ToggleButtonGroupExample />}>
      <ToggleButtonGroupSample />
    </UiComponentsWrapper>
  );
};

export default ToggleButtonGroupPage;
