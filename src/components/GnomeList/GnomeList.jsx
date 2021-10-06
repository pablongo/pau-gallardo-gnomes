/* eslint-disable react/prop-types */
import React from 'react';

import GnomeCard from '../GnomeCard/GnomeCard';

export default function GnomeList({ loadedGnomes }) {
  const currentPage = 1;
  const gnomesPerPage = 20;
  const indexLastGnome = currentPage * gnomesPerPage;
  const indexFirstGnome = indexLastGnome - gnomesPerPage;

  const shownGnomes = loadedGnomes.slice(indexFirstGnome, indexLastGnome);

  return (
    <>
      <h1>This is GnomeList</h1>
      {
          shownGnomes.map((gnome) => (
            <GnomeCard gnome={gnome} />
          ))
      }
    </>
  );
}
