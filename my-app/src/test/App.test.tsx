import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../test/testUtils';

describe('App', () => {
  it('should render the menu', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  })
  it('should logout have a clickable logout button', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  })
});
