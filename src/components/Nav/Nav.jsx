import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return(
      <nav className={classes.nav}>
        <div className={classes.item}>Profile</div>
        <div className={classes.item}>Message</div>
        <div className={classes.item}>News</div>
      </nav>
    );
};

export default Nav;