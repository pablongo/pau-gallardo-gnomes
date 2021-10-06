import { combineReducers } from 'redux';

import gnomesReducer from './gnomesReducer';
import paginationReducer from './paginationReducer';
import gnomesStaticReducer from './gnomesStaticReducer';

export default combineReducers({
  gnomes: gnomesReducer,
  pagination: paginationReducer,
  staticGnomes: gnomesStaticReducer,
});
