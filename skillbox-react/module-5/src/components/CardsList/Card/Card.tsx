import React from 'react';
import styles from './card.less';
import { TextContent } from './TextContent/TextContent';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { Controls } from './Controls/Controls';
import { Dropdown } from '../..//Dropdown/Dropdown';
import { ButtonMenu } from './ButtonMenu';
import { DropMenu } from './DropMenu/DropMenu';


export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Menu>
        <Dropdown button={<ButtonMenu />}>
          <DropMenu />          
        </Dropdown>
      </Menu>
      <Preview />
      <Controls />
    </li>
  );
}
