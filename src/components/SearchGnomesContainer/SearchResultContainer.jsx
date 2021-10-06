/* eslint-disable react/prop-types */
import React from 'react';

export default function SearchResultContainer({ loadedGnomes }) {
  return loadedGnomes && (
    <h1>This is searchResultContainer</h1>
  );
}
