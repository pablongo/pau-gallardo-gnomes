/* eslint-disable react/prop-types */
import React from 'react';

import GnomeListEmpty from '../GnomeListEmpty/GnomeListEmpty';
import GnomeList from '../GnomeList/GnomeList';

export default function SearchResultContainer({ loadedGnomes }) {
  return loadedGnomes && (
    <section>
      <h2>Gnomes</h2>
      {
      loadedGnomes.length
        ? <GnomeList loadedGnomes={loadedGnomes} />
        : <GnomeListEmpty />
      }
    </section>
  );
}
