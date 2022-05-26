import React from 'react';
import styles from './dropmenu.less';
import { generateId } from '../../../../utils/react/generateRandomIndex';
const LIST = [
  {As: 'li' as const, img: '', text: 'Комментарии'}, 
  {As: 'li' as const, img: '', text: "Поделиться"}, 
  {As: 'li' as const, img: '', text: 'Скрыть'},
  {As: 'li' as const, img: '', text: 'Сохранить'},
  {As: 'li' as const, img: '', text: 'Пожаловаться'},
].map(generateId);

export function DropMenu() {
  return (
    <div className={styles.dropMenu}>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <button className={styles.closeButtom}>Закрыть</button>

    </div>
  );
}
