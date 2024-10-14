import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import RadioExample from './_components/radio-example/radio-example';
import RadioSample from './_components/radio-sample/radio-sample';

const RadioPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<RadioExample />}>
      <RadioSample />
    </UiComponentsWrapper>
  );
};

export default RadioPage;
