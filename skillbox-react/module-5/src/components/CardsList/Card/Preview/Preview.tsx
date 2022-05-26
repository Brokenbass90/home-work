import React from 'react';
import styles from './preview.less';

export function Preview() {
  return (
    <div className={styles.preview}>
        <img 
          className={styles.previewImg}
          src="https://ktonanovenkogo.ru/image/priroda-gora.jpg"
        />
      </div>
  );
}
