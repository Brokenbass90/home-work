import React from 'react';
import styles from './dropmenu.less';
import { ListItem } from './ListItem/ListItem';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { commentImg, shareImg, hideImg, saveImg, complaintImg } from '../../../../images/listImages/listImg'

const LIST = [
  {As: 'li' as const, img: commentImg, text: 'Комментарии'}, 
  {As: 'li' as const, img: shareImg, text: "Поделиться"}, 
  {As: 'li' as const, img: hideImg, text: 'Скрыть'},
  {As: 'li' as const, img: saveImg, text: 'Сохранить'},
  {As: 'li' as const, img: complaintImg, text: 'Пожаловаться'},
].map(generateId);

export function DropMenu() {
  return (
    <div className={styles.dropMenu}>
      <ul>
        <ListItem list={LIST} />
      </ul>
      <button className={styles.closeButtom}>Закрыть</button>
    </div>
  );
}
