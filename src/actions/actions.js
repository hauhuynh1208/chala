import {actionConstants, API_URL} from '../constants';
import {get, post} from './requestAdapter';
import axios from 'axios';

export const actions = {
  getQuatCongNghiep,
  getLyToGiay,
  getMyNghe,
};

function getQuatCongNghiep() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getsp.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_QUAT_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_QUAT_FAILURE,
          data: err,
        });
      });
  };
}

function getLyToGiay() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getspb.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_GIAY_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_GIAY_FAILURE,
          data: err,
        });
      });
  };
}

function getMyNghe() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getspc.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_TT_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_TT_FAILURE,
          data: err,
        });
      });
  };
}
