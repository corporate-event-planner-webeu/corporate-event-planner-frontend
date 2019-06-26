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
  return axiosWithAuth()
    .get(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, payload: res.data, message: "Vendor list fetched" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const createVendor = (url, data) => dispatch => {
  dispatch({ type: ADDING_VENDOR });
  return axiosWithAuth()
    .post(url, data)
    .then(res => dispatch({ type: SUCCESS_VENDOR, payload: res.data, message: "Vendor Created" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const deleteVendor = url => dispatch => {
  dispatch({ type: DELETING_VENDOR });
  return axiosWithAuth()
    .delete(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, payload: res.data, message: "Vendor Deleted" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};

export const markVendorAsPaid = url => dispatch => {
  dispatch({ type: MARKING_VENDOR_AS_PAID });
  return axiosWithAuth()
    .put(url)
    .then(res => dispatch({ type: SUCCESS_VENDOR, payload: res.data, message: "Vendor Paid" }))
    .catch(err => dispatch({ type: ERROR_VENDOR }));
};
