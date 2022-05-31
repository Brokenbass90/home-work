import React from 'react';
import styles from './dropmenu.less';
import { ListItem } from './ListItem/ListItem';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { commentImg, shareImg, hideImg, saveImg, complaintImg } from '../../../../images/listImages/listImg'

const LIST = [
  {As: 'li' as const, img: commentImg, text: 'Комментарии', className: styles.itemBox}, 
  {As: 'li' as const, img: shareImg, text: "Поделиться", className: styles.itemBox}, 
  {As: 'li' as const, img: hideImg, text: 'Скрыть', className: styles.itemBox},
  {As: 'li' as const, img: saveImg, text: 'Сохранить', className: styles.itemBox},
  {As: 'li' as const, img: complaintImg, text: 'Пожаловаться', className: styles.itemBox},
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
