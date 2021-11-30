import React from "react";
import styles from "./header.less";

export function Header(){
    return(
        <header>
            <div className={styles.headerBlock}>
                <h1 className={styles.hello}>Hello React</h1>
                <a className={styles.link} href="https://github.com/Brokenbass90/home-work/tree/main/skillbox-react" target="_blank">Repo</a>
            </div>
            
        </header>
    );
}