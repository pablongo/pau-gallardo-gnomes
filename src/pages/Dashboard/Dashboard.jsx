import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGnomes } from '../../redux/actions/actionsCreator';

import SearchResultContainer from '../../components/SearchGnomesContainer/SearchResultContainer';
import SearchFilters from '../../components/SearchFilters/SearchFilters';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loadedGnomes = useSelector(({ gnomes }) => gnomes);

  useEffect(() => {
    dispatch(loadGnomes());
  }, []);

  return (
    <>
      <SearchFilters />
      <SearchResultContainer loadedGnomes={loadedGnomes} />
    </>
  );
}
