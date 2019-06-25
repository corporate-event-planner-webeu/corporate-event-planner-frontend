import axiosWithAuth from "../../utils/axios";

import {
  FETCHING_EVENT,
  ADDING_EVENT,
  DELETING_EVENT,
  COMPLETING_EVENT,
  SUCCESS_EVENT,
  ERROR_EVENT
} from "./actionTypes";

export const getAllEvents = url => dispatch => {
  dispatch({ type: FETCHING_EVENT });
  axiosWithAuth()
    .get(url)
    .then(res => dispatch({ type: SUCCESS_EVENT, payload: res.data, message: "Event fetched" }))
    .catch(err => dispatch({ type: ERROR_EVENT }));
};

export const createEvent = (url, data) => dispatch => {
  dispatch({ type: ADDING_EVENT });
  axiosWithAuth()
    .post(url, data)
    .then(res => dispatch({ type: SUCCESS_EVENT, message: "Event Created" }))
    .catch(err => dispatch({ type: ERROR_EVENT }));
};

export const deleteEvent = url => dispatch => {
  dispatch({ type: DELETING_EVENT });
  axiosWithAuth()
    .delete(url)
    .then(res => dispatch({ type: SUCCESS_EVENT, message: "Event Deleted" }))
    .catch(err => dispatch({ type: ERROR_EVENT }));
};

export const markEventComplete = url => dispatch => {
  dispatch({ type: COMPLETING_EVENT });
  axiosWithAuth()
    .put(url)
    .then(res => dispatch({ type: SUCCESS_EVENT, message: "Event Completed" }))
    .catch(err => dispatch({ type: ERROR_EVENT }));
};
