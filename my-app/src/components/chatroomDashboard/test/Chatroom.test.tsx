import React from 'react';
import { screen } from '@testing-library/react';
import Chatroom from '../Chatroom';
import { renderWithProviders, chatroom1 } from '../../../test/testUtils';

describe('Chatroom', () => {
  it('should render a chatroom', async () => {
    renderWithProviders(<Chatroom chatroom={chatroom1} />);
    const chatroomText = screen.getByText('Hello...');
    expect(chatroomText).toBeInTheDocument();
  });
});
