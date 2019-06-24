import {
  LOGGING_IN,
  ERROR_LOGIN,
  SUCCESSFUL_LOGIN,
  SIGNING_IN,
  ERROR_SIGNIN,
  SUCCESSFUL_SIGNIN
} from "../actions/actionTypes";

const initialState = {
  loggingIn: false,
  signingIn: false,
  errorLogin: false,
  errorSignin: false,
  successfulLogin: false,
  successfulSignin: false,
  message: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    case SIGNING_IN:
      return {
        ...state,
        signingIn: true
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        successfulLogin: true,
        errorLogin: false,
        loggingIn: false,
        message: action.message
      };
    case ERROR_LOGIN:
      return {
        ...state,
        successfulLogin: false,
        errorLogin: true,
        loggingIn: false,
        message: action.message
      };
    case SUCCESSFUL_SIGNIN:
      return {
        ...state,
        successfulSignin: true,
        errorSignin: false,
        signingIn: false,
        message: action.message
      };
    case ERROR_SIGNIN:
      return {
        ...state,
        successfulSignin: false,
        errorSignin: true,
        signingIn: false,
        message: action.message
      };
    default:
      return state;
  }
};


export default authReducer;