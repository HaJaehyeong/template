import {
  RiApps2AddLine,
  RiArrowDownCircleLine,
  RiArrowLeftRightLine,
  RiCheckboxMultipleLine,
  RiCircleLine,
  RiEqualizerLine,
  RiHashtag,
  RiHome2Line,
  RiLayoutGridLine,
  RiListCheck,
  RiListCheck3,
  RiListRadio,
  RiMenuAddLine,
  RiMenuLine,
  RiRadioButtonLine,
  RiStarHalfLine,
  RiText,
  RiToggleLine,
} from '@remixicon/react';

export const NAVIGATION_MAIN = { name: 'Main', path: '/how-to-use', icon: RiHome2Line, sortNo: 0 };
export const NAVIGATION_LIST = [
  { name: 'Button', path: '/how-to-use/button', icon: RiCircleLine, sortNo: 1 },
  { name: 'Button Group', path: '/how-to-use/button-group', icon: RiApps2AddLine, sortNo: 2 },
  { name: 'Button Group Split', path: '/how-to-use/button-group-split', icon: RiArrowDownCircleLine, sortNo: 3 },
  { name: 'Checkbox', path: '/how-to-use/checkbox', icon: RiCheckboxMultipleLine, sortNo: 4 },
  { name: 'List Item', path: '/how-to-use/list-item', icon: RiListCheck, sortNo: 5 },
  { name: 'List Subheader', path: '/how-to-use/list-subheader', icon: RiHashtag, sortNo: 6 },
  { name: 'Menu', path: '/how-to-use/menu', icon: RiMenuLine, sortNo: 7 },
  { name: 'Menu Item', path: '/how-to-use/menu-item', icon: RiMenuAddLine, sortNo: 8 },
  { name: 'Radio', path: '/how-to-use/radio', icon: RiRadioButtonLine, sortNo: 9 },
  { name: 'Radio Group', path: '/how-to-use/radio-group', icon: RiListRadio, sortNo: 10 },
  { name: 'Rating', path: '/how-to-use/rating', icon: RiStarHalfLine, sortNo: 11 },
  { name: 'Select', path: '/how-to-use/select', icon: RiListCheck3, sortNo: 12 },
  { name: 'Slider', path: '/how-to-use/slider', icon: RiEqualizerLine, sortNo: 13 },
  { name: 'Switch', path: '/how-to-use/switch', icon: RiToggleLine, sortNo: 14 },
  { name: 'Text Field', path: '/how-to-use/text-field', icon: RiText, sortNo: 15 },
  { name: 'Toggle Button Group', path: '/how-to-use/toggle-button-group', icon: RiLayoutGridLine, sortNo: 17 },
  { name: 'Transfer List', path: '/how-to-use/transfer-list', icon: RiArrowLeftRightLine, sortNo: 18 },
];
