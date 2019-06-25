import {
  FETCHING_TODO,
  ADDING_TODO,
  DELETING_TODO,
  UPDATING_TODO,
  ERROR_TODO,
  SUCCESS_TODO,
  MARKING_COMPLETE
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  fetchingTodo: false,
  addingTodo: false,
  updatingTodo: false,
  deletingTodo: false,
  markingTodo: false,
  success: false,
  error: false,
  message: null
};

//  we would have one success and failure so if any issue, its state is changed. and we would have a component listening for it
// that pops an alert with the error or success message for all actions
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODO:
      return {
        ...state,
        fetchingTodo: true
      };
    case ADDING_TODO:
      return {
        ...state,
        addingTodo: true
      };
    case UPDATING_TODO:
      return {
        ...state,
        updatingTodo: true
      };
    case DELETING_TODO:
      return {
        ...state,
        deletingTodo: true
      };
    case MARKING_COMPLETE:
      return {
        ...state,
        markingTodo: true
      };
    case ERROR_TODO:
      return {
        ...state,
        fetchingTodo: false,
        addingTodo: false,
        updatingTodo: false,
        deletingTodo: false,
        error: true,
        markingTodo: true,
        success: false,
        message: action.payload
      };
    case SUCCESS_TODO:
      return {
        ...state,
        fetchingTodo: false,
        addingTodo: false,
        updatingTodo: false,
        deletingTodo: false,
        success: true,
        error: false,
        markingTodo: true,
        message: action.message,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
