import {
  FETCHING_VENDOR,
  ERROR_VENDOR,
  ADDING_VENDOR,
  DELETING_VENDOR,
  MARKING_VENDOR_AS_PAID,
  SUCCESS_VENDOR
} from "../actions/actionTypes";

const initialState = {
  vendors: [],
  fetchingVendors: false,
  addingVendor: false,
  deletingVendor: false,
  markingVendor: false,
  success: false,
  error: false,
  message: null
};

//  we would have one success and failure so if any issue, its state is changed. and we would have a component listening for it
// that pops an alert with the error or success message for all actions
const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_VENDOR:
      return {
        ...state,
        fetchingVendors: true
      };
    case ADDING_VENDOR:
      return {
        ...state,
        addingVendor: true
      };
    case DELETING_VENDOR:
      return {
        ...state,
        deletingVendor: true
      };
    case MARKING_VENDOR_AS_PAID:
      return {
        ...state,
        markingVendor: true
      };
    case SUCCESS_VENDOR:
      return {
        ...state,
        vendors: action.payload,
        success: true,
        error: false,
        fetchingVendors: false,
        addingVendor: false,
        deletingVendor: false,
        markingVendor: false,
        message: action.message
      };
    case ERROR_VENDOR:
      return {
        ...state,
        error: true,
        success: false,
        fetchingVendors: false,
        addingVendor: false,
        deletingVendor: false,
        markingVendor: false,
        message: action.message
      };
    default:
      return state;
  }
};

export default vendorReducer;
