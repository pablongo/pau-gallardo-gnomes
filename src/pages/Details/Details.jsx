import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { loadGnomes } from '../../redux/actions/actionsCreator';

import Header from '../../components/Header/Header';

import './Details.scss';

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
      <Header />
      <section className="details-container">
        <h2 className="">{gnome?.name}</h2>
        <section className="details-container__basics basics">
          <div className="basics__top top">
            <img className="top__image" src={gnome?.thumbnail} alt={gnome?.name} />
            <ul className="top">
              <li>{`Age: ${gnome?.age}`}</li>
              <li>{`Weight: ${gnome?.weight}`}</li>
              <li>{`Height: ${gnome?.height}`}</li>
              <li>{`Hair color: ${gnome?.hair_color}`}</li>
            </ul>
          </div>
          <hr />
          <div className="basics__bottom">
            <div>
              <h4>Professions:</h4>
              {gnome && !gnome.professions?.length
                ? <span>No professions found</span>
                : (
                  <ul>
                    {gnome && gnome.professions?.map((profession) => (
                      <li key={profession}>{profession}</li>
                    ))}
                  </ul>
                )}
            </div>
            <div>
              <h4>Friends:</h4>
              {gnome && !gnome.friends?.length
                ? <span>No friends found</span>
                : (
                  <ul>
                    {gnome && gnome.friends?.map((friend) => (
                      <li key={friend}>{friend}</li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
        </section>
        <Link to="/">
          <button
            className="btn- btn-primary"
            type="button"
          >
            Go back
          </button>
        </Link>
      </section>
    </>
  );
}
