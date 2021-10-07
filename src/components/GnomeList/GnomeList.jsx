import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import GnomeCard from '../GnomeCard/GnomeCard';
import PagintationButtons from '../PaginationButtons/PaginationButtons';

import './GnomeList.scss';

export default function GnomeList({ loadedGnomes }) {
  const { currentPage, gnomesPerPage } = useSelector((store) => store.pagination);

  const indexLastGnome = currentPage * gnomesPerPage;
  const indexFirstGnome = indexLastGnome - gnomesPerPage;

  const shownGnomes = loadedGnomes.slice(indexFirstGnome, indexLastGnome);

  return (
    <>
      <PagintationButtons
        loadedGnomes={loadedGnomes}
        currentPage={currentPage}
        gnomesPerPage={gnomesPerPage}
      />
      <section className="album py-5 bg-light">
        <article className="container">
          <ul data-testid="gnome-list" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
          shownGnomes.map((gnome) => (
            <GnomeCard key={gnome?.name} gnome={gnome} />
          ))
        }
          </ul>
        </article>
      </section>
      <PagintationButtons
        loadedGnomes={loadedGnomes}
        currentPage={currentPage}
        gnomesPerPage={gnomesPerPage}
      />
    </>
  );
}

GnomeList.propTypes = {
  loadedGnomes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
