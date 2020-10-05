import * as actionTypes from './../actionTypes';

const initialState = {
    posts: [],
    addSuccess: false
}

const copyArrayAndRemoveItem = (array, id) => {
    // let arrayCopy = initialState.posts.slice();
    return array.filter(post => post.id !== id);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_SUCCESS:
            let obj = updateObject(state, action);
            return obj;
        case actionTypes.FETCH_POSTS_FAILED: return updateObject(state); //Hm?
        case actionTypes.ADD_POST_SUCCESS:
            return updateObject(state, { addSuccess: true });
        case actionTypes.ADD_POST_FAILED:
            return updateObject(state, { addSuccess: false });
        case actionTypes.ADD_POST_INIT:
            return updateObject(state, { addSuccess: false });
        case actionTypes.DELETE_POST_SUCCESS:
            const updatedProperties = {
                posts: copyArrayAndRemoveItem(state.posts, action.deletedId)
            }
            return updateObject(state, updatedProperties);
        case actionTypes.DELETE_POST_FAILED: return updateObject(state);
    }
    return state;
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export default reducer;