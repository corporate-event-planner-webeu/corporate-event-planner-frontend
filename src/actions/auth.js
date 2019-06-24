import axios from 'axios';
import * as types from './actionTypes';


export const login = (email, password) => (dispatch) => {
    const credentials = { email, password };
    console.log(credentials);

    return axios
        .post(
            'https://corporate-event-planner-webeu.herokuapp.com/api/auth/login',
             credentials
        )
        .then(res => {
          dispatch({ 
            type: types.SUCCESSFUL_LOGIN, 
            payload: res.data.token, 
            message: 'Login Successful'
          }) ;
        })
        .catch(err => {
             console.log("Auth failed")
        }); 
    };


export const signup = credentials => dispatch => {
    return axios
      .post(
        "https://corporate-event-planner-webeu.herokuapp.com/api/auth/register",
        credentials
      )
      .then(res => {
        dispatch({
          type: types.SUCCESSFUL_SIGNIN,
          payload: res.data.token,
          message: "Registration successful"
        });
      })
      .catch(err => {
        console.log(err);
      });
  }