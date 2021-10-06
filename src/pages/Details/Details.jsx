import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { loadGnomes } from '../../redux/actions/actionsCreator';

export default function Details() {
  const dispatch = useDispatch();

  const { gnomeId } = useParams();

  const gnome = useSelector((store) => store.gnomes).find(({ id }) => id === +gnomeId);

  useEffect(() => {
    if (!gnome) {
      dispatch(loadGnomes());
    }
  }, []);

  return (
    <>
      <h1>Details Page</h1>
      <h3>{gnome?.name}</h3>
      <Link to="/">
        <button
          type="button"
        >
          Go back
        </button>
      </Link>
    </>
  );
}
