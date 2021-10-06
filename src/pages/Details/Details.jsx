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
    <section>
      <h2>{gnome.name}</h2>
      <img src={gnome.thumbnail} alt={gnome.name} />
      <div>
        <span>{`Age: ${gnome.age}`}</span>
        <span>{`Weight: ${gnome.weight}`}</span>
        <span>{`Height: ${gnome.height}`}</span>
        <span>{`Hair color: ${gnome.hair_color}`}</span>
      </div>
      <div>
        <h3>Professions:</h3>
        <ul>
          {gnome.professions.map((profession) => (
            <li key={profession}>{profession}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Friends:</h3>
        <ul>
          {gnome.friends.map((friend) => (
            <li key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
      <Link to="/">
        <button
          type="button"
        >
          Go back
        </button>
      </Link>
    </section>
  );
}
