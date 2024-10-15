import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import RatingExample from './_components/rating-example/rating-example';
import RatingSample from './_components/rating-sample/rating-sample';

const RatingPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<RatingExample />}>
      <RatingSample />
    </UiComponentsWrapper>
  );
};

export default RatingPage;
