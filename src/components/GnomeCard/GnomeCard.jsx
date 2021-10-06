/* eslint-disable react/prop-types */
import React from 'react';

import './GnomeCard.scss';

export default function GnomeCard({ gnome }) {
  return (
    <>
      <li className="gnome-container">
        <img className="gnome-container__avatar" src={gnome.thumbnail} alt={gnome.name} />
        <h3 className="gnome-container__title">{gnome?.name}</h3>
      </li>
    </>
  );
}
