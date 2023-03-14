import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../test/testUtils';

describe('App', () => {
  it('should render the component', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Which language would you like to learn?')).toBeInTheDocument();
  });
});
