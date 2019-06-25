import axiosWithAuth from "../../utils/axios";

import {
  FETCHING_TODO,
  ADDING_TODO,
  DELETING_TODO,
  UPDATING_TODO,
  ERROR_TODO,
  SUCCESS_TODO,
  MARKING_COMPLETE
} from "./actionTypes";

export const getAllTodos = url => dispatch => {
  dispatch({ type: FETCHING_TODO });
  axiosWithAuth()
    .get(url)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todofetched" }))
    .catch(err => dispatch({ type: ERROR_TODO }));
};

export const createTodo = (url, data) => dispatch => {
  dispatch({ type: ADDING_TODO });
  axiosWithAuth()
    .post(url, data)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Created" }))
    .catch(err => dispatch({ type: ERROR_TODO }));
};

export const updateTodo = (url, data) => dispatch => {
    dispatch({ type: UPDATING_TODO });
    axiosWithAuth()
      .put(url, data)
      .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Updated" }))
      .catch(err => dispatch({ type: ERROR_TODO }));
  };

export const deleteTodo = url => dispatch => {
  dispatch({ type: DELETING_TODO });
  axiosWithAuth()
    .delete(url)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Deleted" }))
    .catch(err => dispatch({ type: ERROR_TODO}));
};

export const markTodoComplete = url => dispatch => {
  dispatch({ type: MARKING_COMPLETE });
  axiosWithAuth()
    .put(url)
    .then(res => dispatch({ type: SUCCESS_TODO, message: "Todo Completed" }))
    .catch(err => dispatch({ type: ERROR_TODO }));
};
