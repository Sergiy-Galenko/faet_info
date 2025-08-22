import React from 'react';
import styles from '../styles/components/Header.module.css';
import logo from "../logo.webp";
import { nav } from '../data/links';

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.header_logoBlock}>
            <a href='/'>
              <img src={logo} alt="Logo" />
            </a>
        </div>
        <div className={styles.header_nav}>
          {nav.map((item) => (
              <a key={item.url} className={styles.header_nav__link} href={item.url}>
                  {item.text}
              </a>
          ))}
        </div>
      </header>
    );
}

export default Header;
