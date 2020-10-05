import navigationReducer from './navigation';
import postsReducer from './posts';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    navigationReducer: navigationReducer,
    postsReducer: postsReducer
});

// export default rootReducer;