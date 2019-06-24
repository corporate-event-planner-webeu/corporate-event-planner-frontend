import axios from 'axios';
import * as types from './actionTypes';


export const login = (email, password) => (dispatch) => {
    const credentialsEmailPW = { email, password };

    axios.post('https://corporate-event-planner-webeu.herokuapp.com/api/auth/login', credentialsEmailPW)
        .then(res => {
            dispatch({ 
                type: types.SUCCESSFUL_LOGIN, 
                payload: res.token, 
                message: 'login successful' 
            }) ;
        })
        .catch(err => {
             console.log("Auth failed")
        })
    };


export const signup = credentials => dispatch => {
    axios
      .post(
        "https://corporate-event-planner-webeu.herokuapp.com/api/auth/register",
        credentials
      )
      .then(res => {
        dispatch({
          type: types.SUCCESSFUL_SIGNIN,
          payload: res.token,
          message: "Registration successful"
        });
      })
      .catch(err => {
        console.log(err);
      });
  }