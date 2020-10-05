import * as actionTypes from './../actionTypes';

const initialState = {
    showSidebar: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIDEBAR_SHOW:
            return {
                ...state,
                showSidebar: action.showSidebar
            };
    }
    return state;
}

export default reducer;