import axiosWithAuth from "../../utils/axios";

import {
  FETCHING_EVENT,
  ADDING_EVENT,
  DELETING_EVENT,
  COMPLETING_EVENT,
  SUCCESS_EVENT,
  ERROR_EVENT,
  NO_AUTH
} from "./actionTypes";


export const getAllEvents = url => dispatch => {
  dispatch({ type: FETCHING_EVENT });
  return axiosWithAuth()
    .get(url)
    .then(res =>
      {
        if(res.status === 200) {
          dispatch({
            type: SUCCESS_EVENT,
            payload: res.data,
            message: "Event fetched"
          });
        } 
      }
    )
    .catch(err => {
      if(err.response.status === 401) {
        dispatch({type: NO_AUTH})
      } else {
        dispatch({ type: ERROR_EVENT });
      }
      
    });
};

export const createEvent = (url, data) => dispatch => {
  dispatch({ type: ADDING_EVENT });
  return axiosWithAuth()
    .post(url, data)
    .then(res =>
      dispatch({
        type: SUCCESS_EVENT,
        payload: res.data,
        message: "Event Created"
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      } else {
        dispatch({ type: ERROR_EVENT });
      }
    });
};

export const deleteEvent = url => dispatch => {
  dispatch({ type: DELETING_EVENT });
  axiosWithAuth()
    .delete(url)
    .then(res =>
      dispatch({
        type: SUCCESS_EVENT,
        payload: res.data,
        message: "Event Deleted"
      })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      } else {
        dispatch({ type: ERROR_EVENT });
      }
    });
};

export const markEventComplete = (url,data) => dispatch => {
  dispatch({ type: COMPLETING_EVENT });
  return axiosWithAuth()
    .put(url,data)
    .then(res =>
      dispatch({ type: SUCCESS_EVENT, message: "Event Completed" })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      } else {
        dispatch({ type: ERROR_EVENT });
      }
    });
};
