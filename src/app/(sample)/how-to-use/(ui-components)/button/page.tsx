import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ButtonSample from './_components/button-sample/button-sample';

const ButtonPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<span>댓뀽</span>}>
      <ButtonSample />
    </UiComponentsWrapper>
  );
};

export default ButtonPage;
