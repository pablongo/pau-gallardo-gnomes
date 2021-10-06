import actionTypes from '../actions/actionTypes';

export default function paginationReducer(pagination = {}, action) {
  let newPagination = pagination;
  switch (action.type) {
    case actionTypes.SET_PAGINATION:
      newPagination = action.data;
      break;

    default:
      break;
  }
  return newPagination;
}
