import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import ChatroomsDashboard from '../ChatroomsDashboard';
import { renderWithProviders } from '../../../test/testUtils';

describe('ChatroomsDashboard', () => {
  it('should render the ChatroomsDashboard component', () => {
    renderWithProviders(<ChatroomsDashboard />);
    expect(screen.getByText('+ Create New Chat')).toBeInTheDocument();

    fireEvent.click(screen.getByText('+ Create New Chat'));
    expect(screen.getByText('Chats')).toBeInTheDocument();
  });
});

export {};
