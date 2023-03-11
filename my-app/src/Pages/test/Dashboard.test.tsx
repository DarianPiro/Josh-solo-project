import React from 'react';
import { screen} from '@testing-library/react';
import Dashboard from '../Dashboard';
import { renderWithProviders } from '../../test/testUtils';

describe('Dashboard', () => {
  it('should render the component', () => {
    renderWithProviders(<Dashboard />);
    const userProfile = screen.getByText('Josh');
    const chatroomsDashboard = screen.getByText('Chatrooms');
    const chatDisplayContainer = screen.getByText('Chat Display');
    expect(userProfile).toBeInTheDocument();
    expect(chatroomsDashboard).toBeInTheDocument();
    expect(chatDisplayContainer).toBeInTheDocument();
  });
}
);

