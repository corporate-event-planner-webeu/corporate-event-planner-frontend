import axiosWithAuth from "../../utils/axios";

import {
  FETCHING_TODO,
  ADDING_TODO,
  DELETING_TODO,
  UPDATING_TODO,
  ERROR_TODO,
  SUCCESS_TODO,
  MARKING_COMPLETE,
  NO_AUTH
} from "./actionTypes";

export const getAllTodos = url => dispatch => {
  dispatch({ type: FETCHING_TODO });
  return axiosWithAuth()
    .get(url)
    .then(res =>
      dispatch({
        type: SUCCESS_TODO,
        payload: res.data,
        message: "Todofetched"
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_TODO });
    });
};

export const createTodo = (url, data) => dispatch => {
  dispatch({ type: ADDING_TODO });
  axiosWithAuth()
    .post(url, data)
    .then(res =>
      dispatch({
        type: SUCCESS_TODO,
        payload: res.data,
        message: "Todo Created"
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_TODO });
    });
};

export const updateTodo = (url, data) => dispatch => {
  dispatch({ type: UPDATING_TODO });
  axiosWithAuth()
    .put(url, data)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Updated" }))
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_TODO });
    });
};

export const deleteTodo = url => dispatch => {
  dispatch({ type: DELETING_TODO });
  return axiosWithAuth()
    .delete(url)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Deleted" }))
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_TODO });
    });
};

export const markTodoComplete = (url,data) => dispatch => {
  dispatch({ type: MARKING_COMPLETE });
  return axiosWithAuth()
    .put(url, data)
    .then(res =>
      dispatch({
        type: SUCCESS_TODO,
        payload: res.data,
        message: "Todo Completed"
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_TODO });
    });
};
