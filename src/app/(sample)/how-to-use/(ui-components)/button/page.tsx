import UiButton from '@/ui/button/button';
import { RiArrowRightDoubleLine } from '@remixicon/react';
import styles from './page.module.scss';

const ButtonPage: React.FC = () => {
  return (
    <div className="ui-component-page-wrapper">
      <div className={`${styles.sampleWrapper} paper elevated square-false`}>
        <div className={styles.exampleButton}>
          Example <RiArrowRightDoubleLine />
        </div>
        <div>
          <h4>Variant</h4>
          <h5>Contained (Default)</h5>
          <div className={styles.variant}>
            <div className={styles.item}>
              <UiButton value="Button" />
              <label>Default</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" leftIcon />
              <label>Left Icon</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" rightIcon />
              <label>Right Icon</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" fabExtended />
              <label>Fab Extended</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" fabRound />
              <label>Fab Round</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" star />
              <label>Icon Buttons</label>
            </div>
          </div>

          <h5>Outlined</h5>
          <div className={styles.variant}>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" />
              <label>Default</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" leftIcon />
              <label>Left Icon</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" rightIcon />
              <label>Right Icon</label>
            </div>
          </div>

          <h5>Text</h5>
          <div className={styles.variant}>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" />
              <label>Default</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" leftIcon />
              <label>Left Icon</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" rightIcon />
              <label>Right Icon</label>
            </div>
          </div>

          <hr />

          <h4>Color</h4>
          <h5>Primary (Default)</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" />
              <label>Text</label>
            </div>
          </div>

          <h5>Secondary</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" color="secondary" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" color="secondary" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" color="secondary" />
              <label>Text</label>
            </div>
          </div>

          <h5>Error</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" color="error" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" color="error" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" color="error" />
              <label>Text</label>
            </div>
          </div>

          <h5>Warning</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" color="warning" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" color="warning" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" color="warning" />
              <label>Text</label>
            </div>
          </div>

          <h5>Info</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" color="info" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" color="info" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" color="info" />
              <label>Text</label>
            </div>
          </div>

          <h5>Success</h5>
          <div className={styles.color}>
            <div className={styles.item}>
              <UiButton value="Button" color="success" />
              <label>Contained</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="outlined" color="success" />
              <label>Outlined</label>
            </div>
            <div className={styles.item}>
              <UiButton value="Button" variant="text" color="success" />
              <label>Text</label>
            </div>
          </div>
        </div>

        <hr />

        <h4>Size</h4>
        <h5>Small</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButton value="Button" size="s" />
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="outlined" size="s" />
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="text" size="s" />
            <label>Text</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="s" fabExtended />
            <label>Fab Extended</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="s" fabRound />
            <label>Fab Round</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="s" star />
            <label>Star</label>
          </div>
        </div>

        <h5>Medium (Default)</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButton value="Button" size="m" />
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="outlined" size="m" />
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="text" size="m" />
            <label>Text</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" fabExtended />
            <label>Fab Extended</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" fabRound />
            <label>Fab Round</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" star />
            <label>Star</label>
          </div>
        </div>

        <h5>Large</h5>
        <div className={styles.size}>
          <div className={styles.item}>
            <UiButton value="Button" size="l" />
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="outlined" size="l" />
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="text" size="l" />
            <label>Text</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="l" fabExtended />
            <label>Fab Extended</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="l" fabRound />
            <label>Fab Round</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="l" star />
            <label>Star</label>
          </div>
        </div>

        <hr />

        <h4>State</h4>
        <h5>Disabled</h5>
        <div className={styles.state}>
          <div className={styles.item}>
            <UiButton value="Button" size="m" disabled />
            <label>Contained</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="outlined" size="m" disabled />
            <label>Outlined</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" variant="text" size="m" disabled />
            <label>Text</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" fabExtended disabled />
            <label>Fab Extended</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" fabRound disabled />
            <label>Fab Round</label>
          </div>
          <div className={styles.item}>
            <UiButton value="Button" size="m" star disabled />
            <label>Star</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
