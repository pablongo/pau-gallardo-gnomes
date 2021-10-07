import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/actions/actionsCreator';

export default function PagintationButtons({ loadedGnomes, currentPage, gnomesPerPage }) {
  const dispatch = useDispatch();

  function handlePaginationClick(direction) {
    dispatch(changePage(direction, currentPage, gnomesPerPage));
  }

  return (
    <nav className="btn-group" role="group" aria-label="Basic example">
      <button
        className="btn btn-primary"
        data-testid="prev-button"
        disabled={currentPage === 1}
        type="button"
        onClick={() => handlePaginationClick('prev')}
      >
        Prev
      </button>
      <button
        className="btn btn-primary"
        data-testid="next-button"
        disabled={!loadedGnomes[(currentPage + 1) * gnomesPerPage]}
        type="button"
        onClick={() => handlePaginationClick('next')}
      >
        Next
      </button>
    </nav>
  );
}

PagintationButtons.propTypes = {
  loadedGnomes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  gnomesPerPage: PropTypes.number.isRequired,
};
