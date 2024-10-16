import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import SelectExample from './_components/select-example/select-example';
import SelectSample from './_components/select-sample/select-sample';

const SelectPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<SelectExample />}>
      <SelectSample />
    </UiComponentsWrapper>
  );
};

export default SelectPage;
