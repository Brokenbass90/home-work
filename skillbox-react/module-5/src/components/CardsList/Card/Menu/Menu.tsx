import React, { ReactNode } from 'react';
import styles from './menu.less';
import { Dropdown } from '../../..//Dropdown/Dropdown';
import { DropMenu } from '../DropMenu/DropMenu';
import { MenuIcon } from '../../../../images/MenuIcon'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown 
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }>
        <DropMenu /> 
      </Dropdown>
    </div>
  );
}

