'use client';
import UiButtonGroupSplit from '@/ui/button-group-split/button-group-split';
import UiButtonGroup from '@/ui/button-group/button-group';
import UiButton from '@/ui/button/button';
import UiCheckBox from '@/ui/checkbox/checkbox';
import UiListItem from '@/ui/list-item/list-item';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiRadioGroup from '@/ui/radio-group/radio-group';
import UiRadio from '@/ui/radio/radio';
import UiRating from '@/ui/rating/rating';
import UiSelect from '@/ui/select/select';
import UiSlider from '@/ui/slider/slider';
import UiSwitch from '@/ui/switch/switch';
import UiTextField from '@/ui/text-field/text-field';
import UiToggleButtonGroup from '@/ui/toggle-button-group/toggle-button-group';
import UiToggleButton from '@/ui/toggle-button/toggle-button';
import UiTransferList from '@/ui/transfer-list/transfer-list';
import { RiChat4Line, RiEyeLine, RiEyeOffLine, RiHeartFill, RiHeartLine, RiMailLine } from '@remixicon/react';
import { useState } from 'react';
import styles from './page.module.scss';

const Home: React.FC = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('a');
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" color="primary" size="s" />
        <UiButton value="BUTTON" color="primary" />
        <UiButton value="BUTTON" color="primary" size="l" />
        <UiButton value="BUTTON" color="primary" leftIcon size="s" />
        <UiButton value="BUTTON" color="primary" leftIcon size="m" />
        <UiButton value="BUTTON" color="primary" leftIcon size="l" />
        <UiButton value="BUTTON" color="primary" rightIcon size="s" />
        <UiButton value="BUTTON" color="primary" rightIcon size="m" />
        <UiButton value="BUTTON" color="primary" rightIcon size="l" />
        <UiButton value="BUTTON" color="primary" fabExtended size="s" />
        <UiButton value="BUTTON" color="primary" fabExtended size="m" />
        <UiButton value="BUTTON" color="primary" fabExtended size="l" />
        <UiButton color="primary" fabRound size="s" />
        <UiButton color="primary" fabRound size="m" />
        <UiButton color="primary" fabRound size="l" />
        <UiButton color="primary" star size="s" />
        <UiButton color="primary" star size="m" />
        <UiButton color="primary" star size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" color="secondary" size="s" />
        <UiButton value="BUTTON" color="secondary" />
        <UiButton value="BUTTON" color="secondary" size="l" />
        <UiButton value="BUTTON" color="secondary" leftIcon size="s" />
        <UiButton value="BUTTON" color="secondary" leftIcon size="m" />
        <UiButton value="BUTTON" color="secondary" leftIcon size="l" />
        <UiButton value="BUTTON" color="secondary" rightIcon size="s" />
        <UiButton value="BUTTON" color="secondary" rightIcon size="m" />
        <UiButton value="BUTTON" color="secondary" rightIcon size="l" />
        <UiButton value="BUTTON" color="secondary" fabExtended size="s" />
        <UiButton value="BUTTON" color="secondary" fabExtended size="m" />
        <UiButton value="BUTTON" color="secondary" fabExtended size="l" />
        <UiButton color="secondary" fabRound size="s" />
        <UiButton color="secondary" fabRound size="m" />
        <UiButton color="secondary" fabRound size="l" />
        <UiButton color="secondary" star size="s" />
        <UiButton color="secondary" star size="m" />
        <UiButton color="secondary" star size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" color="error" size="s" />
        <UiButton value="BUTTON" color="error" />
        <UiButton value="BUTTON" color="error" size="l" />
        <UiButton value="BUTTON" color="error" leftIcon size="s" />
        <UiButton value="BUTTON" color="error" leftIcon size="m" />
        <UiButton value="BUTTON" color="error" leftIcon size="l" />
        <UiButton value="BUTTON" color="error" rightIcon size="s" />
        <UiButton value="BUTTON" color="error" rightIcon size="m" />
        <UiButton value="BUTTON" color="error" rightIcon size="l" />
        <UiButton value="BUTTON" color="error" fabExtended size="s" />
        <UiButton value="BUTTON" color="error" fabExtended size="m" />
        <UiButton value="BUTTON" color="error" fabExtended size="l" />
        <UiButton color="error" fabRound size="s" />
        <UiButton color="error" fabRound size="m" />
        <UiButton color="error" fabRound size="l" />
        <UiButton color="error" star size="s" />
        <UiButton color="error" star size="m" />
        <UiButton color="error" star size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="outlined" color="warning" size="s" />
        <UiButton value="BUTTON" variant="outlined" color="warning" />
        <UiButton value="BUTTON" variant="outlined" color="warning" size="l" />
        <UiButton value="BUTTON" variant="outlined" color="warning" leftIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="warning" leftIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="warning" leftIcon size="l" />
        <UiButton value="BUTTON" variant="outlined" color="warning" rightIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="warning" rightIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="warning" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="outlined" color="info" size="s" />
        <UiButton value="BUTTON" variant="outlined" color="info" />
        <UiButton value="BUTTON" variant="outlined" color="info" size="l" />
        <UiButton value="BUTTON" variant="outlined" color="info" leftIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="info" leftIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="info" leftIcon size="l" />
        <UiButton value="BUTTON" variant="outlined" color="info" rightIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="info" rightIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="info" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="outlined" color="success" size="s" />
        <UiButton value="BUTTON" variant="outlined" color="success" />
        <UiButton value="BUTTON" variant="outlined" color="success" size="l" />
        <UiButton value="BUTTON" variant="outlined" color="success" leftIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="success" leftIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="success" leftIcon size="l" />
        <UiButton value="BUTTON" variant="outlined" color="success" rightIcon size="s" />
        <UiButton value="BUTTON" variant="outlined" color="success" rightIcon size="m" />
        <UiButton value="BUTTON" variant="outlined" color="success" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="text" size="s" />
        <UiButton value="BUTTON" variant="text" />
        <UiButton value="BUTTON" variant="text" size="l" />
        <UiButton value="BUTTON" variant="text" leftIcon size="s" />
        <UiButton value="BUTTON" variant="text" leftIcon size="m" />
        <UiButton value="BUTTON" variant="text" leftIcon size="l" />
        <UiButton value="BUTTON" variant="text" rightIcon size="s" />
        <UiButton value="BUTTON" variant="text" rightIcon size="m" />
        <UiButton value="BUTTON" variant="text" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="text" color="secondary" size="s" />
        <UiButton value="BUTTON" variant="text" color="secondary" />
        <UiButton value="BUTTON" variant="text" color="secondary" size="l" />
        <UiButton value="BUTTON" variant="text" color="secondary" leftIcon size="s" />
        <UiButton value="BUTTON" variant="text" color="secondary" leftIcon size="m" />
        <UiButton value="BUTTON" variant="text" color="secondary" leftIcon size="l" />
        <UiButton value="BUTTON" variant="text" color="secondary" rightIcon size="s" />
        <UiButton value="BUTTON" variant="text" color="secondary" rightIcon size="m" />
        <UiButton value="BUTTON" variant="text" color="secondary" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" variant="text" color="error" size="s" />
        <UiButton value="BUTTON" variant="text" color="error" />
        <UiButton value="BUTTON" variant="text" color="error" size="l" />
        <UiButton value="BUTTON" variant="text" color="error" leftIcon size="s" />
        <UiButton value="BUTTON" variant="text" color="error" leftIcon size="m" />
        <UiButton value="BUTTON" variant="text" color="error" leftIcon size="l" />
        <UiButton value="BUTTON" variant="text" color="error" rightIcon size="s" />
        <UiButton value="BUTTON" variant="text" color="error" rightIcon size="m" />
        <UiButton value="BUTTON" variant="text" color="error" rightIcon size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" disabled size="s" />
        <UiButton value="BUTTON" disabled size="m" />
        <UiButton value="BUTTON" disabled size="l" />
        <UiButton value="BUTTON" variant="outlined" disabled size="s" />
        <UiButton value="BUTTON" variant="outlined" disabled size="m" />
        <UiButton value="BUTTON" variant="outlined" disabled size="l" />
        <UiButton value="BUTTON" variant="text" disabled size="s" />
        <UiButton value="BUTTON" variant="text" disabled size="m" />
        <UiButton value="BUTTON" variant="text" disabled size="l" />
        <UiButton value="BUTTON" disabled size="s" leftIcon />
        <UiButton value="BUTTON" disabled size="m" leftIcon />
        <UiButton value="BUTTON" disabled size="l" leftIcon />
        <UiButton value="BUTTON" disabled size="s" rightIcon />
        <UiButton value="BUTTON" disabled size="m" rightIcon />
        <UiButton value="BUTTON" disabled size="l" rightIcon />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButton value="BUTTON" disabled size="s" fabExtended />
        <UiButton value="BUTTON" disabled size="m" fabExtended />
        <UiButton value="BUTTON" disabled size="l" fabExtended />
        <UiButton value="BUTTON" disabled size="s" fabRound />
        <UiButton value="BUTTON" disabled size="m" fabRound />
        <UiButton value="BUTTON" disabled size="l" fabRound />
        <UiButton value="BUTTON" disabled size="s" star />
        <UiButton value="BUTTON" disabled size="m" star />
        <UiButton value="BUTTON" disabled size="l" star />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiButtonGroup>
          <UiButton value="BUTTON" color="primary" />
          <UiButton value="BUTTON" color="primary" />
          <UiButton value="BUTTON" color="primary" />
        </UiButtonGroup>
        <UiButtonGroupSplit value="BUTTON">
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
        </UiButtonGroupSplit>
        <UiButtonGroup type="vertical">
          <UiButton value="BUTTON" />
          <UiButton value="BUTTON" />
          <UiButton value="BUTTON" />
        </UiButtonGroup>
        <UiButtonGroupSplit type="vertical" value="BUTTON">
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
          <UiMenuItem>first menu item</UiMenuItem>
        </UiButtonGroupSplit>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiToggleButton />
        <UiToggleButton active />
        <UiToggleButton disabled />
        <UiToggleButton size="s" />
        <UiToggleButton size="l" />
        <UiToggleButton size="l" divider={false} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiToggleButtonGroup>
          <UiToggleButton />
          <UiToggleButton active />
          <UiToggleButton disabled />
        </UiToggleButtonGroup>

        <UiToggleButtonGroup size="l">
          <UiToggleButton />
          <UiToggleButton active />
          <UiToggleButton disabled />
        </UiToggleButtonGroup>

        <UiToggleButtonGroup size="s">
          <UiToggleButton />
          <UiToggleButton active />
          <UiToggleButton disabled />
        </UiToggleButtonGroup>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiCheckBox label="Label" />
        <UiCheckBox />
        <UiCheckBox size="s" />
        <UiCheckBox label="Small" size="s" />
        <UiCheckBox size="l" />
        <UiCheckBox size="l" label="Large" />
        <UiCheckBox checked={false} disabled />
        <UiCheckBox checked={true} disabled />
        <UiCheckBox label="Disabled" checked={false} disabled />
        <UiCheckBox label="Disabled" checked={true} disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiCheckBox label="Primary" />
        <UiCheckBox label="Secondary" color="secondary" />
        <UiCheckBox label="Info" color="info" />
        <UiCheckBox label="Success" color="success" />
        <UiCheckBox label="Warning" color="warning" />
        <UiCheckBox label="Error" color="error" />
        <UiCheckBox label="Indeterminate" indeterminate />
        <UiCheckBox color="secondary" indeterminate />
        <UiCheckBox color="info" indeterminate />
        <UiCheckBox color="warning" indeterminate />
        <UiCheckBox color="success" indeterminate />
        <UiCheckBox color="error" indeterminate />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiRadio checked={false} />
        <UiRadio label="Primary" checked={true} color="primary" />
        <UiRadio label="Secondary" checked={true} color="secondary" />
        <UiRadio label="Info" checked={true} color="info" />
        <UiRadio label="Success" checked={true} color="success" />
        <UiRadio label="Warning" checked={true} color="warning" />
        <UiRadio label="Error" checked={true} color="error" />
        <UiRadio label="Disabled" checked={false} disabled />
        <UiRadio label="Disabled" checked={true} disabled />
        <UiRadio label="Small" checked={true} size="s" />
        <UiRadio label="Small" checked={true} color="info" size="s" />
        <UiRadio label="Large" checked={true} size="l" />
        <UiRadio label="Large" checked={true} color="error" size="l" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiRadio checked={false} />
        <UiRadio label="Primary" checked={false} color="primary" />
        <UiRadio label="Secondary" checked={false} color="secondary" />
        <UiRadio label="Info" checked={false} color="info" />
        <UiRadio label="Success" checked={false} color="success" />
        <UiRadio label="Warning" checked={false} color="warning" />
        <UiRadio label="Error" checked={false} color="error" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiRadio checked={false} />
        <UiRadio
          label="Name"
          name="name"
          value="a"
          color="primary"
          checked={selectedRadioValue === 'a'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="Name"
          name="name"
          value="b"
          color="secondary"
          checked={selectedRadioValue === 'b'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="Name"
          name="name"
          value="c"
          color="info"
          checked={selectedRadioValue === 'c'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="Name"
          name="name"
          value="d"
          color="success"
          checked={selectedRadioValue === 'd'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="Name"
          name="name"
          value="e"
          color="warning"
          checked={selectedRadioValue === 'e'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="Name"
          name="name"
          value="f"
          color="error"
          checked={selectedRadioValue === 'f'}
          onChange={handleRadioChange}
        />
      </div>

      <UiRadioGroup name="group-test" className={styles.test}>
        <UiRadio
          label="group radio a"
          value="a"
          color="primary"
          checked={selectedRadioValue === 'a'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="group radio b"
          value="b"
          color="secondary"
          checked={selectedRadioValue === 'b'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="group radio c"
          value="c"
          color="info"
          checked={selectedRadioValue === 'c'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="group radio d"
          value="d"
          color="success"
          checked={selectedRadioValue === 'd'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="group radio e"
          value="e"
          color="warning"
          checked={selectedRadioValue === 'e'}
          onChange={handleRadioChange}
        />
        <UiRadio
          label="group radio f"
          value="f"
          color="error"
          checked={selectedRadioValue === 'f'}
          onChange={handleRadioChange}
        />
      </UiRadioGroup>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiRating rating={0} />
        <UiRating rating={10} color="var(--error-main)" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} />
        <UiRating rating={20} />
        <UiRating rating={25} />
        <UiRating rating={50} />
        <UiRating rating={50} disabled />
        <UiRating rating={70} />
        <UiRating rating={90} color="var(--error-main)" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} />
        <UiRating rating={90} color="var(--error-main)" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} disabled />
        <UiRating rating={100} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiRating rating={30} size="s" />
        <UiRating rating={50} size="m" />
        <UiRating rating={70} size="l" />
        <UiRating rating={70} size="l" disabled />
        <UiRating rating={30} color="var(--error-main)" size="s" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} />
        <UiRating rating={50} color="var(--error-main)" size="m" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} />
        <UiRating rating={70} color="var(--error-main)" size="l" emptyIcon={RiHeartLine} fillIcon={RiHeartFill} />
        <UiRating
          rating={70}
          color="var(--error-main)"
          size="l"
          emptyIcon={RiHeartLine}
          fillIcon={RiHeartFill}
          disabled
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSlider value={50} onChange={() => {}} />
        <UiSlider value={50} color="secondary" onChange={() => {}} />
        <UiSlider value={50} color="info" onChange={() => {}} />
        <UiSlider value={50} variant="discrete" color="success" onChange={() => {}} />
        <UiSlider value={50} variant="discrete" color="warning" onChange={() => {}} />
        <UiSlider value={50} variant="discrete" color="error" onChange={() => {}} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSlider min={20} max={50} value={{ min: 20, max: 50 }} onChange={() => {}} />
        <UiSlider max={80} value={{ min: 0, max: 80 }} onChange={() => {}} />
        <UiSlider variant="discrete" max={80} value={{ min: 0, max: 80 }} onChange={() => {}} />
        <UiSlider variant="discrete" max={80} value={{ min: 0, max: 80 }} step={8} onChange={() => {}} />
        <UiSlider max={100} value={{ min: 0, max: 60 }} step={5} onChange={() => {}} />
        <UiSlider min={0} max={100} value={40} onChange={() => {}} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSlider max={100} value={20} onChange={() => {}} />
        <UiSlider max={100} value={{ min: 0, max: 0 }} onChange={() => {}} minGap={10} />
        <UiSlider variant="range" max={100} value={{ min: 40, max: 60 }} minGap={10} onChange={() => {}} />
        <UiSlider
          variant="range"
          min={20}
          max={100}
          value={{ min: 40, max: 60 }}
          minGap={5}
          step={5}
          onChange={() => {}}
        />
        <UiSlider
          variant="discrete"
          max={80}
          value={{ min: 0, max: 80 }}
          valueLabelDisplay
          valueTooltipDisplay
          onChange={() => {}}
        />
        <UiSlider
          variant="range"
          value={{ min: 0, max: 80 }}
          minGap={15}
          valueLabelDisplay
          valueTooltipDisplay
          onChange={() => {}}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSlider min={20} max={50} value={{ min: 20, max: 50 }} disabled onChange={() => {}} />
        <UiSlider variant="discrete" min={0} max={100} value={{ min: 20, max: 50 }} disabled onChange={() => {}} />
        <UiSlider
          variant="range"
          color="secondary"
          max={60}
          value={{ min: 40, max: 60 }}
          minGap={10}
          onChange={() => {}}
        />
        <UiSlider variant="range" color="info" max={100} value={{ min: 40, max: 60 }} minGap={10} onChange={() => {}} />
        <UiSlider
          variant="range"
          color="warning"
          max={100}
          value={{ min: 40, max: 60 }}
          minGap={10}
          onChange={() => {}}
        />
        <UiSlider
          variant="range"
          color="error"
          max={100}
          value={{ min: 40, max: 60 }}
          minGap={10}
          onChange={() => {}}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSlider value={50} size="s" onChange={() => {}} />
        <UiSlider variant="discrete" value={50} size="s" onChange={() => {}} />
        <UiSlider variant="range" value={{ min: 20, max: 80 }} size="s" onChange={() => {}} />
        <UiSlider variant="range" value={{ min: 20, max: 80 }} color="error" size="s" onChange={() => {}} />
        <UiSlider variant="discrete" value={60} step={20} size="s" onChange={() => {}} />
        <UiSlider
          variant="discrete"
          min={0}
          max={20}
          step={3}
          value={8}
          valueLabelDisplay
          valueTooltipDisplay
          size="s"
          onChange={() => {}}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <UiSwitch />
        <UiSwitch checked />
        <UiSwitch label="hello" />
        <UiSwitch color="secondary" />
        <UiSwitch color="info" />
        <UiSwitch color="success" />
        <UiSwitch color="warning" />
        <UiSwitch color="error" />
        <UiSwitch color="inactive" />
        <UiSwitch color="primary" size="s" />
        <UiSwitch color="secondary" size="s" />
        <UiSwitch color="info" size="s" />
        <UiSwitch color="primary" size="s" label="label" />
        <UiSwitch color="secondary" size="s" label="label" />
        <UiSwitch color="info" size="s" label="label" />
        <UiSwitch color="inactive" size="s" label="label" />
        <UiSwitch color="inactive" disabled label="label" />
        <UiSwitch disabled label="label" checked />
        <UiSwitch disabled size="s" label="label" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiTransferList leftDatas={['List item', 'List item', 'List item', 'List item']} />
        <UiTransferList
          leftDatas={['List item', 'List item', 'List item', 'List item']}
          rightDatas={['List item', 'List item', 'List item', 'List item']}
        />
        <UiTransferList
          type="enhanced"
          leftTitle="Choises"
          rightTitle="Chosen"
          leftDatas={['List item', 'List item', 'List item', 'List item']}
        />
        <UiTransferList
          type="enhanced"
          leftDatas={['List item', 'List item', 'List item', 'List item']}
          rightDatas={['List item', 'List item', 'List item', 'List item']}
          leftTitle="Choises"
          leftSubTitle="뀨잇"
          rightTitle="Chosen"
          rightSubTitle="꾸뀨"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiSelect
          label="Label"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={'hello'}>first menu item</UiMenuItem>
          <UiMenuItem value={'world'}>second menu item</UiMenuItem>
          <UiMenuItem value={'!!!'}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          label="Label"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="outline"
          label="Label"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="outline"
          label="Label Test"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="filed"
          label="Label"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="filed"
          label="Label Test"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          label="Label"
          onChange={(value) => {
            console.log(value);
          }}
          defaultValue={'hello'}
        >
          <UiMenuItem value={'hello'}>first menu item</UiMenuItem>
          <UiMenuItem value={'world'}>second menu item</UiMenuItem>
          <UiMenuItem value={'!!!'}>third menu item</UiMenuItem>
        </UiSelect>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiSelect
          label="Label"
          size="s"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={'hello'}>first menu item</UiMenuItem>
          <UiMenuItem value={'world'}>second menu item</UiMenuItem>
          <UiMenuItem value={'!!!'}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          label="Label"
          size="s"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="outline"
          label="Label"
          size="s"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="outline"
          label="Label Test"
          size="s"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="filed"
          label="Label"
          size="s"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect
          variant="filed"
          label="Label Test"
          size="s"
          helperText="Helper text"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiSelect label="Disabled" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect label="Disabled" size="s" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="outline" label="Disabled" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="outline" label="Disabled" size="s" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="filed" label="Disabled" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="filed" label="Disabled" size="s" disabled>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="outline" label="Disabled" disabled defaultValue={2}>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
        <UiSelect variant="filed" label="Disabled" disabled defaultValue={1}>
          <UiMenuItem value={1}>first menu item</UiMenuItem>
          <UiMenuItem value={2}>second menu item</UiMenuItem>
          <UiMenuItem value={3}>third menu item</UiMenuItem>
        </UiSelect>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiTextField label="Label" />
        <UiTextField label="Label" helperText="ID를 입력해주세요" defaultValue={'hello'} />
        <UiTextField label="Label" variant="outline" />
        <UiTextField label="Label" variant="outline" helperText="ID를 입력해주세요" />
        <UiTextField label="Label" variant="filed" />
        <UiTextField label="Label" variant="filed" helperText="ID를 입력해주세요" />
        <UiTextField label="Label" variant="filed" helperText="ID를 입력해주세요" isError />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiTextField label="Label" fieldSize="s" />
        <UiTextField label="Label" fieldSize="s" helperText="ID를 입력해주세요" />
        <UiTextField label="Label" variant="outline" fieldSize="s" />
        <UiTextField label="Label" variant="outline" fieldSize="s" helperText="ID를 입력해주세요" />
        <UiTextField label="Label" variant="filed" fieldSize="s" />
        <UiTextField label="Label" variant="filed" fieldSize="s" helperText="ID를 입력해주세요" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiTextField label="Disabled" disabled />
        <UiTextField label="Disabled" fieldSize="s" helperText="ID를 입력해주세요" disabled />
        <UiTextField label="Disabled" variant="outline" disabled />
        <UiTextField label="Disabled" variant="outline" fieldSize="s" helperText="ID를 입력해주세요" disabled />
        <UiTextField label="Disabled" variant="filed" disabled />
        <UiTextField label="Disabled" variant="filed" fieldSize="s" helperText="ID를 입력해주세요" disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <UiTextField label="Prefix" type="text" fieldPrefix={'Kg'} />
        <UiTextField label="내 몸무게" type="text" fieldPrefix={'Kg'} fieldSize="s" width={100} defaultValue="71" />
        <UiTextField label="Suffix" type="text" fieldSuffix={'Kg'} />
        <UiTextField label="내 몸무게" type="text" fieldSuffix={'Kg'} fieldSize="s" width={100} defaultValue="71" />
        <UiTextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fieldPrefix={
            showPassword ? (
              <RiEyeOffLine size={20} style={{ cursor: 'pointer' }} onClick={handlePasswordToggle} />
            ) : (
              <RiEyeLine size={20} style={{ cursor: 'pointer' }} onClick={handlePasswordToggle} />
            )
          }
        />
        <UiTextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fieldSuffix={
            showPassword ? (
              <RiEyeOffLine size={20} style={{ cursor: 'pointer' }} onClick={handlePasswordToggle} />
            ) : (
              <RiEyeLine size={20} style={{ cursor: 'pointer' }} onClick={handlePasswordToggle} />
            )
          }
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', border: 'solid 1px var(--secondary-main)', width: '400px' }}
      >
        <UiListItem icon={RiMailLine} name="Email" />
        <UiListItem icon={RiChat4Line} name="Chat" />
      </div>
    </div>
  );
};

export default Home;
