import React from 'react';
import c from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
      <div>
        <img alt='' src='https://static.tildacdn.com/tild6234-3562-4566-b439-336463623038/logotipy_bel.png' />
        <h1>CONTENT</h1>
        <div className={c.item}>ava+description</div>
        <MyPosts />
      </div>
    );
};

export default Content;