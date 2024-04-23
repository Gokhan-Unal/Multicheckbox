import React from 'react';

import styles from './MultiCheckbox.module.css';

function MultiCheckbox({ options }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-monday"
          value="monday"
        />
        <label htmlFor="multi-checkbox-monday">
          Monday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-tuesday"
          value="tuesday"
        />
        <label htmlFor="multi-checkbox-tuesday">
          Tuesday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-wednesday"
          value="wednesday"
        />
        <label htmlFor="multi-checkbox-wednesday">
          Wednesday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-thursday"
          value="thursday"
        />
        <label htmlFor="multi-checkbox-thursday">
          Thursday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-friday"
          value="friday"
        />
        <label htmlFor="multi-checkbox-friday">
          Friday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-saturday"
          value="saturday"
        />
        <label htmlFor="multi-checkbox-saturday">
          Saturday
        </label>
      </li>
      <li className={styles.option}>
        <input
          type="checkbox"
          id="multi-checkbox-sunday"
          value="sunday"
        />
        <label htmlFor="multi-checkbox-sunday">
          Sunday
        </label>
      </li>
    </ol>
  );
}

export default MultiCheckbox;