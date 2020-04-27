import {actionConstants} from '../constants';
import {combineReducers} from 'redux';

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

const combinedReducer = combineReducers({
  quat: quatReducer,
  giay: giayReducer,
  tt: ttReducer,
});

export default combinedReducer;
