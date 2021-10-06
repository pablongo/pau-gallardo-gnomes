import React from 'react';
import { render, screen } from '../../utils/testutils';

import GnomeCard from './GnomeCard';

describe('Given a GnomeCard component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      const gnome = {
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      };
      render(<GnomeCard gnome={gnome} />);
    });
    test('Then list-component-0 should be in the document', () => {
      expect(screen.getByTestId('list-component-0')).toBeInTheDocument();
    });
  });
});
