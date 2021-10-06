import React from 'react';
import { render, screen, fireEvent } from '../../utils/testutils';

import { changePage } from '../../redux/actions/actionsCreator';

import PaginationButtons from './PaginationButtons';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionsCreator');

describe('Given a GnomeCard component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      const loadedGnomes = [{
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      },
      {
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      },
      {
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      },
      {
        id: 0,
        name: 'Pau',
        thumbnail: 'url',
      }];

      render(<PaginationButtons
        loadedGnomes={loadedGnomes}
        currentPage={2}
        gnomesPerPage={1}
      />);
    });
    test('Then prev-button should be in the document', () => {
      expect(screen.getByTestId('prev-button')).toBeInTheDocument();
    });
    describe('And prev-button is clicked', () => {
      test('Then changePage should have been called with prev,2,1', () => {
        const prevButton = screen.getByTestId('prev-button');

        changePage.mockReturnValue({
          type: actionTypes.SET_PAGINATION,
          pagination: {},
        });

        fireEvent.click(prevButton);

        expect(changePage).toHaveBeenCalledWith('prev', 2, 1);
      });
    });
    describe('And next-button is clicked', () => {
      test('Then chandePage should have been called with next,2,1', () => {
        const nextButton = screen.getByTestId('next-button');

        changePage.mockReturnValue({
          type: actionTypes.SET_PAGINATION,
          pagination: {},
        });

        fireEvent.click(nextButton);

        expect(changePage).toHaveBeenCalledWith('next', 2, 1);
      });
    });
  });
});
