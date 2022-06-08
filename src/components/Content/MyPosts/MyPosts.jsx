import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {
    return (
      <div className={posts.content}>
          <div className={posts.posts}>New post</div>
          <textarea></textarea>
          <button>Add</button>
          <button>Remove</button>
          <Post message='123' />
          <Post message='ZZZZZZ' />
    </div>
    );
};

export default MyPosts;