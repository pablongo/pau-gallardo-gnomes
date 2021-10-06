import { combineReducers } from 'redux';
import gnomesReducer from './gnomesReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  gnomes: gnomesReducer,
  pagination: paginationReducer,
});
