/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/actions/actionsCreator';

export default function PagintationButtons({ currentPage, gnomesPerPage }) {
  const dispatch = useDispatch();

  function handlePaginationClick(direction) {
    dispatch(changePage(direction, currentPage, gnomesPerPage));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handlePaginationClick('prev')}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => handlePaginationClick('next')}
      >
        Next
      </button>
    </>
  );
}
