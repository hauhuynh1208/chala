import {actionConstants} from '../constants';
import {combineReducers} from 'redux';

const generalReducer = (state = {}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.QUERY_SP_SUCCESS:
      _state.productList = action.data.data;
      return _state;
    case actionConstants.QUERY_SP_FAILURE:
      _state = action.data.err;
      return _state;
    default:
      return _state;
  }
};

const quatReducer = (state = {}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.GET_QUAT_SUCCESS:
      _state.data = action.data.data;
      return _state;
    case actionConstants.GET_QUAT_FAILURE:
      _state = action.data.err;
      return _state;
    default:
      return _state;
  }
};

const giayReducer = (state = {}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.GET_GIAY_SUCCESS:
      _state.data = action.data.data;
      return _state;
    case actionConstants.GET_GIAY_FAILURE:
      _state = action.data.err;
      return _state;
    default:
      return _state;
  }
};

const ttReducer = (state = {}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.GET_TT_SUCCESS:
      _state.data = action.data.data;
      return _state;
    case actionConstants.GET_TT_FAILURE:
      _state = action.data.err;
      return _state;
    default:
      return _state;
  }
};

const spReducer = (state = {}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.FETCH_PRODUCT_CAT_SUCCESS:
      _state.spCat = action.data.data;
      return _state;
    case actionConstants.FETCH_PRODUCT_CAT_FAILURE:
      _state.spCat = action.data.err;
      return _state;
    case actionConstants.GET_PRODUCT_LIST_SUCCESS:
      _state.spList = action.data.data;
      return _state;
    case actionConstants.GET_PRODUCT_LIST_FAILURE:
      _state.spList = action.data.err;
      return _state;
    default:
      return _state;
  }
};

const cartReducer = (state = {cart: []}, action) => {
  var _state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionConstants.ADD_TO_CART_SUCCESS:
      _state.cart = action.data;
      return _state;
    case actionConstants.RETRIEVE_CART_SUCCESS:
      return _state.cart;
    default:
      return _state;
  }
};

const combinedReducer = combineReducers({
  general: generalReducer,
  quat: quatReducer,
  giay: giayReducer,
  tt: ttReducer,
  sp: spReducer,
  cart: cartReducer,
});

export default combinedReducer;
