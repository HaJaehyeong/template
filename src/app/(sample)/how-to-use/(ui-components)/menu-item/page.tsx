import UiComponentsWrapper from '../_components/ui-components-wrapper/ui-components-wrapper';
import MenuItemExample from './_components/menu-item-example/menu-item-example';
import MenuItemSample from './_components/menu-item-sample/menu-item-sample';

const MenuItemPage: React.FC = () => {
  return (
    <UiComponentsWrapper exampleChildren={<MenuItemExample />}>
      <MenuItemSample />
    </UiComponentsWrapper>
  );
};

export default MenuItemPage;
