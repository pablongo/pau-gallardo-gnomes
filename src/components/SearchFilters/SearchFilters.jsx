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
    <>
      <input
        type="text"
        placeholder="Search Gnomes..."
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={() => handleSearch(inputValue)}
      >
        Search
      </button>
    </>
  );
}
