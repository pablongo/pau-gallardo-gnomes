import React from 'react';
import { render, screen } from '../../utils/testutils';

import SearchResultContainer from './SearchResultContainer';

describe('Given a SearchResultContainer component', () => {
  describe('When is rendered', () => {
    describe('And loadedGnomes has no gnomes', () => {
      beforeEach(() => {
        const loadedGnomes = [];
        render(<SearchResultContainer loadedGnomes={loadedGnomes} />);
      });
      test('Then gnome-list should be in the document', () => {
        expect(screen.queryByTestId('gnome-list')).not.toBeInTheDocument();
      });
    });
    describe('And loadedGnomes has gnomes', () => {
      beforeEach(() => {
        const loadedGnomes = [{
          id: 0,
          name: 'Pau',
          thumbnail: 'url',
        }];
        render(<SearchResultContainer loadedGnomes={loadedGnomes} />);
      });
      test('Then gnome-list should be in the document', () => {
        expect(screen.getByTestId('gnome-list')).toBeInTheDocument();
      });
    });
  });
});
