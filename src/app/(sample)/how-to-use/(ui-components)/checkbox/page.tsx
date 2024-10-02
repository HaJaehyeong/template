import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import CheckboxExample from './_components/checkbox-example/checkbox-example';
import CheckboxSample from './_components/checkbox-sample/checkbox-sample';

const CheckboxPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<CheckboxExample />}>
      <CheckboxSample />
    </UiComponentsWrapper>
  );
};

export default CheckboxPage;
