import React from 'react';
import styles from './listitem.less';

interface IItem {
  id: string;
  text: string;
  img?: React.ReactNode;
  className?: string;
  classNameCintent?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}
export function ListItem({ list }: IGenericListProps) {
  return(
    <>
        {list.map(({ As = "li", text, className, id, href, img }) => (
            <As
                className={className}
                key={id}   
                href={href}
            > 
              <div className={styles.imgBox}>{img}</div>
              <div className={styles.textBox}>{text}</div>
            </As>
        ))}
    </>
  )
}
