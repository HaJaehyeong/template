import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import RadioGroupExample from './_components/radio-group-example/radio-group-example';
import RadioGroupSample from './_components/radio-group-sample/radio-group-sample';

const RadioGroupPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<RadioGroupExample />}>
      <RadioGroupSample />
    </UiComponentsWrapper>
  );
};

export default RadioGroupPage;
