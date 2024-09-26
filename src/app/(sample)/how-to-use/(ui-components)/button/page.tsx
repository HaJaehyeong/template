import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ButtonExample from './_components/button-example/button-example';
import ButtonSample from './_components/button-sample/button-sample';

const ButtonPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ButtonExample />}>
      <ButtonSample />
    </UiComponentsWrapper>
  );
};

export default ButtonPage;
