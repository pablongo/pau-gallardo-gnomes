import actionTypes from '../actions/actionTypes';

export default function gnomesReducer(gnomesList = [], action) {
  let newGnomesList = gnomesList;
  switch (action.type) {
    case actionTypes.LOAD_GNOMES:
      newGnomesList = action.data.map((gnome) => gnome);
      break;

    case actionTypes.FILTER_GNOMES:
      newGnomesList = action.allGnomes.filter((gnome) => (
        gnome.name.toLowerCase().includes(action.searchValue.trim())
      ));
      break;

    case actionTypes.API_ERROR:
      break;

    default:
      break;
  }
  return newGnomesList;
}
