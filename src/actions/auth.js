import axios from 'axios';
import * as types from './actionTypes';


export const login = (email, password) => (dispatch) => {
    const credentials = { email, password };

    axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            dispatch({ type: types.SUCCESSFUL_LOGIN, payload: res.token, message: 'login successful' }) ;
        })
        .catch(err => {
            console.log("Auth failed")
        })
};

export const signup = (first_name, last_name, email, password, company, role) => (dispatch) => {
    const credentials = { first_name, last_name, email, password, company, role };

    axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            dispatch({ type: types.SUCCESSFUL_SIGNIN, payload: res.token, message: 'Registration successful' }) 
        })
        .catch(err => {
            console.log("Signup failed")
        })
}