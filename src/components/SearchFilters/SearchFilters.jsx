import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterGnomes } from '../../redux/actions/actionsCreator';

export default function SearchFilters() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function handleInputChange({ target: { value } }) {
    setInputValue(value);
  }

  function handleSearch(searchValue) {
    dispatch(filterGnomes(searchValue));
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
