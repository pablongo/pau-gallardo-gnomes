import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGnomes, changePage } from '../../redux/actions/actionsCreator';

export default function SearchFilters() {
  const allGnomes = useSelector(({ staticGnomes }) => staticGnomes);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function handleInputChange({ target: { value } }) {
    setInputValue(value.toLowerCase().trim());
  }

  function handleSearch(searchValue) {
    dispatch(changePage('reset', 1, 20));
    dispatch(filterGnomes(searchValue, allGnomes));
  }

  return (
    <section className="py-5 text-center container">
      <div className="col-lg-6 col-md-8 gap-3 mx-auto">
        <h1 className="fw-light">Gnome Social</h1>
        <p className="lead text-muted">
          This is my solution to Gnome Social. I dont like designing myself
          so I used boostrap to boost my code development efficiency and
          focus on deliver the assignment as fast as possible.
        </p>
        <form className="input-group">
          <input
            className="form-control"
            data-testid="filter-input"
            type="text"
            placeholder="Search Gnomes..."
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-secondary"
            data-testid="search-button"
            type="button"
            onClick={() => handleSearch(inputValue)}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
