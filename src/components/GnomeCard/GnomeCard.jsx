import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './GnomeCard.scss';

export default function GnomeCard({ gnome }) {
  return (
    <Link to={`/detail/${gnome.id}`}>
      <li className="gnome-container">
        <img className="gnome-container__avatar" src={gnome.thumbnail} alt={gnome.name} />
        <h3 className="gnome-container__title">{gnome?.name}</h3>
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
