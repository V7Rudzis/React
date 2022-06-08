import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
      <header className={h.header}>
        <img alt = '' src = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
      </header>
    );
};

export default Header;