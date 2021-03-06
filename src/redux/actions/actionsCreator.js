import axios from 'axios';
import actionTypes from './actionTypes';

export function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    try {
      dispatch({
        type: actionTypes.LOAD_GNOMES,
        data: data.Brastlewark,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
        error,
      });
    }
  };
}

export function changePage(direction, currentPage, gnomesPerPage) {
  let pagination = {};
  switch (direction) {
    case 'prev':
      pagination = {
        currentPage: currentPage - 1,
        gnomesPerPage,
      };
      break;

    case 'next':
      pagination = {
        currentPage: currentPage + 1,
        gnomesPerPage,
      };
      break;

    default:
      pagination = {
        currentPage,
        gnomesPerPage,
      };
      break;
  }
  return ({
    type: actionTypes.SET_PAGINATION,
    pagination,
  });
}

export function filterGnomes(searchValue, allGnomes) {
  return ({
    type: actionTypes.FILTER_GNOMES,
    searchValue,
    allGnomes,
  });
}
