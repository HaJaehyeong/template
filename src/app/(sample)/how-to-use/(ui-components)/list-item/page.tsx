import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ListItemExample from './_components/list-item-example/list-item-example';
import ListItemSample from './_components/list-item-sample/list-item-sample';

const ListItemPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ListItemExample />}>
      <ListItemSample />
    </UiComponentsWrapper>
  );
};

export default ListItemPage;
