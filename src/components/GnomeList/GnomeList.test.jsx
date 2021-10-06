import React from 'react';
import { render, screen } from '../../utils/testutils';

import GnomeList from './GnomeList';

describe('Given a GnomeCard component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      const loadedGnomes = [{
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      }];
      render(<GnomeList loadedGnomes={loadedGnomes} />);
    });
    test('Then gnome-list should be in the document', () => {
      expect(screen.getByTestId('gnome-list')).toBeInTheDocument();
    });
  });
});
