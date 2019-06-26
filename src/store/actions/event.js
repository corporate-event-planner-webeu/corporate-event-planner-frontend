import axiosWithAuth from "../../utils/axios";
import axios from "axios";

import {
  FETCHING_EVENT,
  ADDING_EVENT,
  DELETING_EVENT,
  COMPLETING_EVENT,
  SUCCESS_EVENT,
  ERROR_EVENT,
  ERROR_IMAGE,
  SUCCESS_IMAGE,
  UPLOADING_IMAGE,
  NO_AUTH
} from "./actionTypes";

export const uploadImage = file => dispatch => {
  dispatch({type: UPLOADING_IMAGE})
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/ogwurujohnson/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "zjjd4c1v";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  return axios
    .post(CLOUDINARY_URL, formData)
    .then(res => {
      if (res.data.secure_url !== "") {
        const uploadedFileUrl = res.data.secure_url;
        dispatch({type: SUCCESS_IMAGE, payload: uploadedFileUrl, message: 'image uploaded'})
      } else {
        dispatch({type: ERROR_IMAGE, message: 'no image selected'})
      }
    })
    .catch(err => dispatch({type: ERROR_IMAGE, message: 'Error: Try again shortly'}));
};

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
      }
      dispatch({ type: ERROR_EVENT });
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
      }
      dispatch({ type: ERROR_EVENT });
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
      }
      dispatch({ type: ERROR_EVENT });
    });
};

export const markEventComplete = url => dispatch => {
  dispatch({ type: COMPLETING_EVENT });
  axiosWithAuth()
    .put(url)
    .then(res =>
      dispatch({ type: SUCCESS_EVENT, message: "Event Completed" })
    )
    .catch(err => {
      if (err.response.status === 401) {
        dispatch({ type: NO_AUTH });
      }
      dispatch({ type: ERROR_EVENT });
    });
};
