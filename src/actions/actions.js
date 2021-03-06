import {actionConstants, API_URL} from '../constants';
import axios from 'axios';

export const actions = {
  getSlide,
  queryProduct,
  getQuatCongNghiep,
  getLyToGiay,
  getMyNghe,
  getTraSua,
  getMLCongNghiep,
  fetchProductCat,
  getProductList,
  getNews,
  addToCart,
  retrieveCart,
};

function getSlide() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/gethinh.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_SLIDE_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_SLIDE_FAILURE,
          data: err,
        });
      });
  };
}

function queryProduct(keyword) {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/gettimkiem.php?page='${keyword}'`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.QUERY_SP_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.QUERY_SP_FAILURE,
          data: err,
        });
      });
  };
}

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

function getTraSua() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getspd.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_TS_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_TS_FAILURE,
          data: err,
        });
      });
  };
}

function getMLCongNghiep() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getspe.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_ML_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_ML_FAILURE,
          data: err,
        });
      });
  };
}

function fetchProductCat() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getspn.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.FETCH_PRODUCT_CAT_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.FETCH_PRODUCT_CAT_FAILURE,
          data: err,
        });
      });
  };
}

function getProductList(productCateId) {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/getsplk.php?page=${productCateId}`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_PRODUCT_LIST_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_PRODUCT_LIST_FAILURE,
          data: err,
        });
      });
  };
}

function getNews() {
  return async (dispatch, getState) => {
    dispatch({type: actionConstants.START_QUERY});
    await axios
      .get(`${API_URL}/gettintuc.php`)
      .then((resp) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_NEWS_SUCCESS,
          data: resp,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionConstants.END_QUERY,
        });
        return dispatch({
          type: actionConstants.GET_PRODUCT_LIST_FAILURE,
          data: err,
        });
      });
  };
}

function addToCart(sp) {
  return (dispatch, getState) => {
    const {cart} = getState();
    cart.cart.push(sp);
    dispatch({
      type: actionConstants.ADD_TO_CART_SUCCESS,
      data: [...new Set(cart.cart)],
    });
  };
}

function retrieveCart() {
  return (dispatch, getState) => {
    // console.log(getState().cart.cart, 'cart');
    return getState().cart.cart;
    // dispatch({type: actionConstants.START_QUERY});
    // dispatch({
    //   type: actionConstants.END_QUERY,
    // });
    // dispatch({
    //   type: actionConstants.RETRIEVE_CART_SUCCESS,
    // });
  };
}
