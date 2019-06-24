import axios from 'axios';
import * as types from './actionTypes';


export const login = (email, password) => (dispatch) => {
    const credentials = { email, password };

    return axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            dispatch({ type: types.SUCCESSFUL_LOGIN, payload: res.data.token, message: 'login successful' }) 
        })
        .catch(err => {
            dispatch({ type: types.ERROR_LOGIN, message: err })
        })
};

export const signup = (credentials) => (dispatch) => {

   return axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            dispatch({ type: types.SUCCESSFUL_SIGNIN, message: 'Registration successful' }) 
        })
        .catch(err => {
            dispatch({ type: types.ERROR_SIGNIN, message: err })
        })
}