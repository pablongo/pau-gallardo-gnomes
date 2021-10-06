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
      <h1>This is GnomeList</h1>
      <PagintationButtons
        loadedGnomes={loadedGnomes}
        currentPage={currentPage}
        gnomesPerPage={gnomesPerPage}
      />
      <ul className="gnome-list-container">
        {
          shownGnomes.map((gnome) => (
            <GnomeCard key={gnome.name} gnome={gnome} />
          ))
        }
      </ul>
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
