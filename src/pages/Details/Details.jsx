import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function Details() {
  const { gnomeId } = useParams();

  const gnome = useSelector((store) => store.gnomes).find(({ id }) => id === +gnomeId);

  return (
    <>
      <h1>Details Page</h1>
      <h3>{gnome?.name}</h3>
    </>
  );
}
