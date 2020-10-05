import React from 'react';
import Post from './Post/Post';
import cssModule from './Posts.module.css';

const posts = (props) => {
    console.log(props.items);
    const posts = props.items.map(post =>
        (<Post
            onDeletePost={(id) => props.onDeletePost(id)}
            id={post.id}
            key={post.id}
            title={post.title}
            text={post.text}>
        </Post>))

    return (<div className={cssModule.Posts}>{posts}</div>)
};

export default posts;