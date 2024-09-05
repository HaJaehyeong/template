'use client';
import UiButtonGroupSplit from '@/ui/button-group-split/button-group-split';
import UiButtonGroup from '@/ui/button-group/button-group';
import UiButton from '@/ui/button/button';
import UiCheckBox from '@/ui/checkbox/checkbox';
import UiMenuItem from '@/ui/menu-item/menu-item';
import UiRadioGroup from '@/ui/radio-group/radio-group';
import UiRadio from '@/ui/radio/radio';
import UiRating from '@/ui/rating/rating';
import UiSlider from '@/ui/slider/slider';
import UiToggleButtonGroup from '@/ui/toggle-button-group/toggle-button-group';
import UiToggleButton from '@/ui/toggle-button/toggle-button';
import { RiHeartFill, RiHeartLine } from '@remixicon/react';
import { useState } from 'react';
import styles from './page.module.scss';

const Home: React.FC = () => {
  const [check, setCheck] = useState(false);

  const [selectedRadioValue, setSelectedRadioValue] = useState('a');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
  };

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
        <UiCheckBox
          label="Label"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          checked={check}
          size="s"
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          checked={check}
          label="Small"
          size="s"
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          size="l"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          size="l"
          label="Large"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox checked={false} disabled />
        <UiCheckBox checked={true} disabled />
        <UiCheckBox label="Disabled" checked={false} disabled />
        <UiCheckBox label="Disabled" checked={true} disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <UiCheckBox
          label="Primary"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Secondary"
          color="secondary"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Info"
          color="info"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Success"
          color="success"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Warning"
          color="warning"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Error"
          color="error"
          checked={check}
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          label="Indeterminate"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          color="secondary"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          color="info"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          color="warning"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          color="success"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
        <UiCheckBox
          color="error"
          checked={check}
          indeterminate
          onChange={(e) => {
            setCheck((prev) => !prev);
          }}
        />
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <UiSlider min={20} max={50} value={{ min: 20, max: 50 }} onChange={() => {}} />
        <UiSlider max={80} value={{ min: 0, max: 80 }} onChange={() => {}} />
        <UiSlider variant="discrete" max={80} value={{ min: 0, max: 80 }} onChange={() => {}} />
        <UiSlider variant="discrete" max={80} value={{ min: 0, max: 80 }} step={8} onChange={() => {}} />
        <UiSlider max={100} value={{ min: 0, max: 60 }} step={5} onChange={() => {}} />
        <UiSlider min={0} max={100} value={40} onChange={() => {}} />
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
    </div>
  );
};

export default Home;
