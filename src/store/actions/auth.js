import axios from 'axios';
import * as types from './actionTypes';


export const login = (email, password) => (dispatch) => {
    const credentials = { email, password };

    axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: types.SUCCESSFUL_LOGIN, payload: res.data.token, message: 'login successful' }) 
        })
        .catch(err => {
            console.log("Auth failed")
        })
};

export const signup = (credentials) => (dispatch) => {

   return axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            dispatch({ type: types.SUCCESSFUL_SIGNIN, message: 'Registration successful' }) 
        })
        .catch(err => {
            console.log("Signup failed")
        })
}