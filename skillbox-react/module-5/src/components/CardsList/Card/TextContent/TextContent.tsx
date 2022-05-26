import React from 'react';
import styles from './textcontent.less';

export function TextContent() {
  return (
    <div className={styles.textContent}>
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img 
          className={styles.avatar}
          src="https://img5.cliparto.com/pic/xl/254123/6379953-smiling-man-with-glasses-round-avatar-icon-symbol.jpg"
          alt="avatar" 
        />
        <a href='#user-url' className={styles.username}>Колька колясик</a>
      </div>
      <span className={styles.createDat}>
        <span className={styles.publishedLabel}>опубликовано </span>
        7 часов назад
      </span>
    </div>
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink}>
        {"Чета тут всякое написано Чета тут всякое написано Чета тут всякое написано Чета тут всякое написано".slice(0, 50) + "..."}
      </a>
    </h2>
  </div>
  );
}
