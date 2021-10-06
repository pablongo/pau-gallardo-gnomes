/* eslint-disable react/prop-types */
import React from 'react';

export default function GnomeCard({ gnome }) {
  return (
    <li>
      <h3>{gnome?.name}</h3>
      <div>
        <picture>
          <img src="" alt="" />
        </picture>
      </div>
    </li>
  );
}
