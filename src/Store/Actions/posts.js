import * as actionTypes from './../actionTypes';
import axios from './../../axios';

export const fetchPostsSucceeded = posts => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchPostsFailed = posts => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        posts: posts
    }
}

export const addPostSucceeded = () => {
    return {
        type: actionTypes.ADD_POST_SUCCESS
    }
}

export const addPostFailed = (error) => {
    return {
        type: actionTypes.ADD_POST_FAILED,
        error: error
    }
}

export const deletePostSucceeded = (id) => {
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        deletedId: id
    }
}

export const deletePostFailed = (error) => {
    return {
        type: actionTypes.DELETE_POST_FAILED,
        error: error
    }
}

export const newPostInit = () => {
    return {
        type: actionTypes.ADD_POST_INIT
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('api/posts')
            .then(response => {
                console.log('No error!!');
                const posts = [];
                for (let key in response.data) {
                    posts.push({
                        id: key,
                        ...response.data[key]
                    });
                }
                dispatch(fetchPostsSucceeded(posts));
            })
            .catch(error => {
                console.log('firebase error!!');
                dispatch(fetchPostsFailed(error));
            });
    }
    // return Promise.resolve();
}

export const deletePost = (id) => {
    console.log(id);
    return dispatch => {

        const deleteUrl = `api/posts/${id}`;
        axios.delete(deleteUrl)
            .then(resp => {
                console.log(resp);
                dispatch(deletePostSucceeded(id));
                dispatch(fetchPosts);
            })
            .catch(err => {
                dispatch(deletePostFailed(err));
            });
    };
}

export const addPost = (title, text) => {
    const post = {
        title: title,
        text: text
    };

    return dispatch => {
        axios.post('api/posts', post)
            .then(resp => {
                dispatch(addPostSucceeded());
                dispatch(fetchPosts());
            })
            .catch(error => {
                dispatch(addPostFailed(error));
            })
    }
}