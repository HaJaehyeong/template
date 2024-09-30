import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ButtonGroupExample from './_components/button-group-example/button-group-example';
import ButtonGroupSample from './_components/button-group-sample/button-group-sample';

const ButtonGroupPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ButtonGroupExample />}>
      <ButtonGroupSample />
    </UiComponentsWrapper>
  );
};

export default ButtonGroupPage;
