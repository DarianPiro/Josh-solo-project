import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import ChatroomsDashboard from '../ChatroomsDashboard';
import { renderWithProviders } from '../../../test/testUtils';

describe('ChatroomsDashboard', () => {
  it('should render the ChatroomsDashboard component', () => {
    renderWithProviders(<ChatroomsDashboard  chat={'ai'}  />);
    expect(screen.getByText('+ Create New Chat')).toBeInTheDocument();

    fireEvent.click(screen.getByText('+ Create New Chat'));
    expect(screen.getByText('Chats')).toBeInTheDocument();
  });
});
