import React from 'react';
import { render, screen } from '../../utils/testutils';

import GnomeListEmtpy from './GnomeListEmpty';

describe('Given a GnomeListEmpty component', () => {
  describe('When is rendered', () => {
    render(<GnomeListEmtpy />);
  });
  test('Then gnome-list should be in the document', () => {
    expect(screen.getByTestId('empty-list')).toBeInTheDocument();
  });
});
