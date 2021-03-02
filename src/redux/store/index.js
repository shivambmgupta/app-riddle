import { createStore } from 'redux';
import reducer from '../reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () => {
    return createStore(reducer, applyMiddleware(thunk));
}