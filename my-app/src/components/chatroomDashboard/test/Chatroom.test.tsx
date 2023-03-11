import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import Chatroom from '../Chatroom';
import { renderWithProviders } from '../../../test/testUtils';

describe('Chatroom', () => {
  it('should render a message', async () => {
    renderWithProviders(<Chatroom />);
    const message = 'Hello world';
    const input = screen.getByLabelText('Message');
    const button = screen.getByText('Send');

    fireEvent.change(input, { target: { value: message } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });
});

export {}