import React, { ReactNode } from 'react';
import styles from './menu.less';

interface IMenuProps{
  children: ReactNode;
}

export function Menu({ children}: IMenuProps) {
  return (
    <div className={styles.menu}>
      {children}
    </div>
  );
}
