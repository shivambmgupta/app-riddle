import Services from '../../services';
import ActionTypes from '../../constants/actions';

export default class Action {
    static fetchPosts = () => async (dispatch) => {
        try {
            Services.getPosts((response) => {
                response?.status === 200
                ? dispatch({ type: ActionTypes.FETCH_POSTS_SUCCESS, payload: response.data })
                : dispatch({ type: ActionTypes.FETCH_POSTS_FAILURE })
            })
        } catch (error) {
            dispatch({ type: ActionTypes.FETCH_POSTS_FAILURE })
        }
    }
    static fetchUsers = () => async (dispatch) => {
        try {
            Services.getUsers(response => {
                response?.status === 200
                ? dispatch({ type: ActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
                : dispatch({ type: ActionTypes.FETCH_USERS_FAILURE })
            })
        } catch (error) {
            dispatch({ type: ActionTypes.FETCH_USERS_FAILURE })
        }
    }
    static fetchComments = () => async (dispatch) => {
        try {
            Services.getComments(response => {
                response?.status === 200
                ? dispatch({ type: ActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data })
                : dispatch({ type: ActionTypes.FETCH_COMMENTS_FAILURE })
            })
        } catch (error) {
            dispatch({ type: ActionTypes.FETCH_COMMENTS_FAILURE })   
        }
    }
    static currentUserSelectionChanged = (user) => async (dispatch) => {
        dispatch({ type: ActionTypes.CURRENT_USER_SELECTED_CHANGED, payload: user })
    }
}