import {
  FETCHING_TEAM,
  ADDING_TEAM_MEMBER,
  DELETING_TEAM_MEMBER,
  ERROR_TEAM,
  SUCCESS_TEAM
} from "../actions/actionTypes";

const initialState = {
  teamMembers: [],
  fetchingTeam: false,
  addingMember: false,
  deletingMember: false,
  success: false,
  error: false,
  message: null
};

//  we would have one success and failure so if any issue, its state is changed. and we would have a component listening for it
// that pops an alert with the error or success message for all actions
const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TEAM:
      return {
        ...state,
        fetchingTeam: true
      };
    case ADDING_TEAM_MEMBER:
      return {
        ...state,
        addingMember: true
      };
    case DELETING_TEAM_MEMBER:
      return {
        ...state,
        deletingMember: true
      };
    case SUCCESS_TEAM:
      return {
        ...state,
        success: true,
        error: false,
        fetchingTeam: false,
        addingMember: false,
        deletingMember: false,
        message: action.message,
        teamMembers: action.payload
      };
    case ERROR_TEAM:
      return {
        ...state,
        error: true,
        success: false,
        message: action.message,
        fetchingTeam: false,
        addingMember: false,
        deletingMember: false,
      };
    default:
      return state;
  }
};

export default teamReducer;
