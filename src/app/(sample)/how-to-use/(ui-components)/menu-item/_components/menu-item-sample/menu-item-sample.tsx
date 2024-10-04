import UiMenuItem from '@/ui/menu-item/menu-item';
import { memo } from 'react';

const MenuItemSample: React.FC = () => {
  return (
    <>
      <div>
        <h4>Samples</h4>
        <h5>width 300px</h5>
        <div style={{ width: '300px' }}>
          <UiMenuItem>Menu Item</UiMenuItem>
          <UiMenuItem>Sample</UiMenuItem>
          <UiMenuItem>Hello world</UiMenuItem>
        </div>

        <h5>width 200px</h5>
        <div style={{ width: '200px' }}>
          <UiMenuItem>Menu Item</UiMenuItem>
          <UiMenuItem>Sample</UiMenuItem>
          <UiMenuItem>Hello world</UiMenuItem>
        </div>

        <h5>Disabled</h5>
        <div style={{ width: '200px' }}>
          <UiMenuItem disabled>Disabled</UiMenuItem>
          <UiMenuItem>Enabled</UiMenuItem>
          <UiMenuItem disabled>Disabled</UiMenuItem>
        </div>
      </div>
    </>
  );
};

// NOTE(hajae): Example Button을 눌렀을 경우 부모 컴포넌트의 상태변화로 인해 해당 컴포넌트도 리렌더링 되므로 이를 막기위해 memo 사용
export default memo(MenuItemSample);
