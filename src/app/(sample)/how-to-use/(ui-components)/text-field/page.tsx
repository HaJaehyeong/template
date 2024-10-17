import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import TextFieldExample from './_components/text-field-example/text-field-example';
import TextFieldSample from './_components/text-field-sample/text-field-sample';

const TextFieldPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<TextFieldExample />}>
      <TextFieldSample />
    </UiComponentsWrapper>
  );
};

export default TextFieldPage;
