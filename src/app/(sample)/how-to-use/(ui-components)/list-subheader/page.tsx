import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import ListSubheaderExample from './_components/list-subheader-example/list-subheader-example';
import ListSubheaderSample from './_components/list-subheader-sample/list-subheader-sample';

const ListSubheaderPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<ListSubheaderExample />}>
      <ListSubheaderSample />
    </UiComponentsWrapper>
  );
};

export default ListSubheaderPage;
