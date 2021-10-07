import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './GnomeCard.scss';

export default function GnomeCard({ gnome }) {
  return (
    <Link className="col gnome-card" to={`/detail/${gnome?.id}`}>
      <li data-testid="list-component-0" className="card shadow-sm">
        <img className="card-img-top gnome-card__avatar" src={gnome?.thumbnail} alt={gnome?.name} />
        <h3 className="card-body card-text">{gnome?.name}</h3>
      </li>
    </Link>
  );
}

GnomeCard.propTypes = {
  gnome: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    age: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    hair_color: PropTypes.string,
    professions: PropTypes.arrayOf(PropTypes.string),
    friends: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
