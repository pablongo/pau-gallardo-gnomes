/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/actions/actionsCreator';

export default function PagintationButtons({ loadedGnomes, currentPage, gnomesPerPage }) {
  const dispatch = useDispatch();

  function handlePaginationClick(direction) {
    dispatch(changePage(direction, currentPage, gnomesPerPage));
  }

  return (
    <>
      <button
        disabled={currentPage === 1}
        type="button"
        onClick={() => handlePaginationClick('prev')}
      >
        Prev
      </button>
      <button
        disabled={!loadedGnomes[(currentPage + 1) * gnomesPerPage]}
        type="button"
        onClick={() => handlePaginationClick('next')}
      >
        Next
      </button>
    </>
  );
}
