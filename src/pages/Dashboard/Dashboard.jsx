import React from 'react';
import { useSelector } from 'react-redux';

import SearchResultContainer from '../../components/SearchGnomesContainer/SearchResultContainer';

export default function Dashboard() {
  const loadedGnomes = useSelector(({ gnomes }) => gnomes);

  return (
    <SearchResultContainer loadedGnomes={loadedGnomes} />
  );
}
