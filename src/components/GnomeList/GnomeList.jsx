/* eslint-disable react/prop-types */
import React from 'react';
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
      <ul className="gnome-list-container">
        {
          shownGnomes.map((gnome) => (
            <GnomeCard key={gnome.name} gnome={gnome} />
          ))
        }
      </ul>
      <PagintationButtons currentPage={currentPage} gnomesPerPage={gnomesPerPage} />
    </>
  );
}
