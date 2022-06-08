import React from 'react';
import post from './Posts.module.css';

const Post = (props) => {
    return (
      <div className={post.content}>
          <div className={post.posts}>
            <img alt='' src='https://www.blast.hk/attachments/68493/' /> 
            {props.message}
            <span>like</span>
          </div>
    </div>
    );
};

export default Post;