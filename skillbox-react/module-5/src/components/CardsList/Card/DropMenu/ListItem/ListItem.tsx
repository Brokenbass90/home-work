import React from 'react';
import styles from './listitem.less';

interface IItem {
  id: string;
  text: string;
  img?: React.ReactNode;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  
}

interface IGenericListProps {
  list: IItem[];
  postID: string;
}
const NOOP = () => {};
export function ListItem({ list, postID }: IGenericListProps) {
  return(
    <>
        {list.map(({ As = "li", text, className, id, href, img}) => (
            <As
                className={className}
                key={id}   
                href={href}
            >
              <div className={styles.imgBox} onClick={() => console.log(postID)}>{img}</div>
              <div className={styles.textBox}>{text}</div>
            </As>
        ))}
    </>
  )
}
