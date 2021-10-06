import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadGnomes } from '../../redux/actions/actionsCreator';

import SearchResultContainer from '../../components/SearchGnomesContainer/SearchResultContainer';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loadedGnomes = useSelector(({ gnomes }) => gnomes);

  useEffect(() => {
    dispatch(loadGnomes());
  }, []);

  return (
    <SearchResultContainer loadedGnomes={loadedGnomes} />
  );
}
