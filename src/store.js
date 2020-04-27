import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducer/appReducer';

export const store = createStore(combinedReducer, applyMiddleware(thunk));
