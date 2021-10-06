import axios from 'axios';
import actionTypes from './actionTypes';

export function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    try {
      dispatch({
        type: actionTypes.LOAD_GNOMES,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
        error,
      });
    }
  };
}

export function loadGnomess() {
  return '';
}
