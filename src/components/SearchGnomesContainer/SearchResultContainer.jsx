import React from 'react';
import { PropTypes } from 'prop-types';

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

SearchResultContainer.propTypes = {
  loadedGnomes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
