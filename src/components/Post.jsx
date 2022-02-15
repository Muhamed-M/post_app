import React from 'react';
import './post.css';

const Post = ({ post, users }) => {
  return (
    <div className="post">
        <span className="user">{
            users.map(user => {
                return user.id === post.userId && user.name
            })
        }</span>
        <h2 className="title">{
        post.title.length > 15 ? post.title.slice(0, 15).concat('...') : post.title
        }</h2>
        <p className="body">{post.body}</p>
    </div>
  );
};

export default Post;