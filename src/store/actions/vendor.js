import axiosWithAuth from "../../utils/axios";

import {
  FETCHING_VENDOR,
  ERROR_VENDOR,
  ADDING_VENDOR,
  DELETING_VENDOR,
  MARKING_VENDOR_AS_PAID,
  SUCCESS_VENDOR
} from "./actionTypes";

export const getAllVendors = url => dispatch => {
  dispatch({ type: FETCHING_VENDOR });
  axiosWithAuth()
    .get(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, message: "Vendor list fetched" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const createVendor = (url, data) => dispatch => {
  dispatch({ type: ADDING_VENDOR });
  axiosWithAuth()
    .post(url, data)
    .then(res => dispatch({ type: SUCCESS_VENDOR, message: "Vendor Created" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const deleteVendor = url => dispatch => {
  dispatch({ type: DELETING_VENDOR });
  axiosWithAuth()
    .delete(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, message: "Vendor Deleted" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const markVendorAsPaid = url => dispatch => {
  dispatch({ type: MARKING_VENDOR_AS_PAID });
  axiosWithAuth()
    .put(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, message: "Vendor Paid" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};
