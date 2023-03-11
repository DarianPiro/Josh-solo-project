import React from 'react';
import { screen } from '@testing-library/react';
import { UserProfile } from '../UserProfile';
import { renderWithProviders } from '../../test/testUtils';

describe('UserProfile', () => {
  it('should render the component', () => {
    renderWithProviders(<UserProfile />);
    const userProfile = screen.getByText('Josh');
    expect(userProfile).toBeInTheDocument();
  });
});
