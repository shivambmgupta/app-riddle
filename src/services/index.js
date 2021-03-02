import axios from 'axios';
import API_URLs from '../configurations/config';

export default class Service {
    static _defaultCallback = (response) => {}
    static async getUsers(callback = this._defaultCallback) {
        callback(await axios.get(API_URLs.GET_USERS));
    }
    static async getPosts(callback = this._defaultCallback) {
        callback(await axios.get(API_URLs.GET_POSTS));
    }
    static async getComments(callback = this._defaultCallback) {
        callback(await axios.get(API_URLs.GET_COMMENTS));
    }
}