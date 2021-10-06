import actionTypes from '../actions/actionTypes';

export default function gnomesReducer(gnomesList = [], action) {
  const newGnomesList = gnomesList;
  switch (action.type) {
    case actionTypes.LOAD_GNOMES:

      break;

    default:
      break;
  }
  return newGnomesList;
}
