import { act } from 'react-test-renderer';
import ActionTypes from '../../constants/actions';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, posts: action.payload, errorFetchingPosts: false }
        case ActionTypes.FETCH_POSTS_FAILURE:
            return { ...state, posts: [], errorFetchingPosts: true }
        case ActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, users: action.payload?.users, currentUser: action.payload?.users?.[0], errorFetchingUser: false }
        case ActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, users: [], currentUser: null, errorFetchingUser: true }
        case ActionTypes.CURRENT_USER_SELECTED_CHANGED:
            return { ...state, currentUser: action.payload }
        case ActionTypes.FETCH_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload?.comments, errorFetchingComments: false }
        case ActionTypes.FETCH_COMMENTS_FAILURE:
            return { ...state, comments: [], errorFetchingComments: true }
        default: 
            return state
    }
}