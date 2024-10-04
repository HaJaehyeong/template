import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import MenuExample from './_components/menu-example/menu-example';
import MenuSample from './_components/menu-sample/menu-sample';

const MenuPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<MenuExample />}>
      <MenuSample />
    </UiComponentsWrapper>
  );
};

export default MenuPage;
