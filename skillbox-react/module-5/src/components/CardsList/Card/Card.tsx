import React from 'react';
import styles from './card.less';
import { TextContent } from './TextContent/TextContent';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { Controls } from './Controls/Controls';


export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Menu />
      <Preview />
      <Controls />
    </li>
  );
}
