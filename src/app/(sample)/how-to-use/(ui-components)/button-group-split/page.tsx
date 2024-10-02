import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ButtonGroupSplitExample from './_components/button-group-split-example/button-group-split-example';
import ButtonGroupSplitSample from './_components/button-group-split-sample/button-group-split-sample';

const ButtonGroupSplitPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ButtonGroupSplitExample />}>
      <ButtonGroupSplitSample />
    </UiComponentsWrapper>
  );
};

export default ButtonGroupSplitPage;
