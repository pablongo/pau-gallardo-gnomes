import actionTypes from '../actions/actionTypes';

export default function gnomesStaticReducer(gnomesList = [], action) {
  let newGnomesList = gnomesList;
  if (action.type === actionTypes.LOAD_GNOMES) {
    newGnomesList = action.data.map((gnome) => gnome);
  }
  return newGnomesList;
}
