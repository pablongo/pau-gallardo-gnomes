import React from 'react';
import { PropTypes } from 'prop-types';

import GnomeListEmpty from '../GnomeListEmpty/GnomeListEmpty';
import GnomeList from '../GnomeList/GnomeList';

export default function SearchResultContainer({ loadedGnomes }) {
  return loadedGnomes && (
    <section className="d-flex flex-column">
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
