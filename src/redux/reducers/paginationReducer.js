import actionTypes from '../actions/actionTypes';

export default function paginationReducer(
  pagination = { currentPage: 1, gnomesPerPage: 20 },
  action,
) {
  let newPagination = pagination;
  switch (action.type) {
    case actionTypes.SET_PAGINATION:
      newPagination = action.pagination;
      break;

    default:
      break;
  }
  return newPagination;
}
