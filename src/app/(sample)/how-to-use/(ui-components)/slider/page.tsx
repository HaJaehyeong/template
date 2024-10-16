import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import SliderExample from './_components/slider-example/slider-example';
import SliderSample from './_components/slider-sample/slider-sample';

const SliderPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<SliderExample />}>
      <SliderSample />
    </UiComponentsWrapper>
  );
};

export default SliderPage;
