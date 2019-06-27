import {
  FETCHING_EVENT,
  ADDING_EVENT,
  DELETING_EVENT,
  COMPLETING_EVENT,
  SUCCESS_EVENT,
  ERROR_EVENT,
  ERROR_IMAGE,
  SUCCESS_IMAGE,
  UPLOADING_IMAGE
} from "../actions/actionTypes";

const initialState = {
  events: [],
  fetchingEvents: false,
  addingEvent: false,
  deletingEvent: false,
  markingComplete: false,
  success: false,
  error: false,
  uploadingImage: false,
  imageurl: "",
  message: null
};

//  we would have one success and failure so if any issue, its state is changed. and we would have a component listening for it
// that pops an alert with the error or success message for all actions
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOADING_IMAGE:
      return {
        ...state,
        uploadingImage: true
      };
    case SUCCESS_IMAGE:
      return {
        ...state,
        imageurl: action.payload,
        message: action.message,
        uploadingImage: false
      };
    case ERROR_IMAGE:
      return {
        ...state,
        message: action.message,
        uploadingImage: false
      };
    case FETCHING_EVENT:
      return {
        ...state,
        fetchingEvents: true
      };
    case ADDING_EVENT:
      return {
        ...state,
        addingEvent: true
      };
    case DELETING_EVENT:
      return {
        ...state,
        deletingEvent: true
      };
    case COMPLETING_EVENT:
      return {
        ...state,
        markingComplete: true
      };
    case SUCCESS_EVENT:
      return {
        ...state,
        success: true,
        error: false,
        fetchingEvents: false,
        addingEvent: false,
        deletingEvent: false,
        markingComplete: false,
        message: action.message,
        events: action.payload
      };
    case ERROR_EVENT:
      return {
        ...state,
        error: true,
        success: false,
        fetchingEvents: false,
        addingEvent: false,
        deletingEvent: false,
        markingComplete: false,
        message: action.message
      };
    default:
      return state;
  }
};

export default eventReducer;
