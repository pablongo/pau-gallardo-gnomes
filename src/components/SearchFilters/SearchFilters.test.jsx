import React from 'react';
import { render, screen, fireEvent } from '../../utils/testutils';

import { changePage, filterGnomes } from '../../redux/actions/actionsCreator';
import actionTypes from '../../redux/actions/actionTypes';

import SearchFilters from './SearchFilters';

jest.mock('../../redux/actions/actionsCreator');

describe('Given a SearchFilters component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<SearchFilters />);
    });
    test('Then filter-input should be in the document', () => {
      expect(screen.getByTestId('filter-input')).toBeInTheDocument();
    });
    describe('And search-button is clicked', () => {
      test('Then changePage should have been called with reset,1,20', () => {
        const searchButton = screen.getByTestId('search-button');
        const filerInput = screen.getByTestId('filter-input');

        changePage.mockReturnValue({
          type: actionTypes.SET_PAGINATION,
          pagination: {},
        });
        filterGnomes.mockReturnValue({
          type: actionTypes.FILTER_GNOMES,
          searchValue: 'Mal',
          allGnomes: [{ name: 'Pau' }],
        });
        fireEvent.change(filerInput, { target: { value: 'Mal' } });
        fireEvent.click(searchButton);

        expect(changePage).toHaveBeenCalledWith('reset', 1, 20);
      });
    });
  });
});
