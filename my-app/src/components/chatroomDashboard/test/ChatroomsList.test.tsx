import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import ChatroomsList from '../ChatroomsList';
import { renderWithProviders, chatroom1, chatroom2 } from '../../../test/testUtils';
import { getChatrooms } from '../../../ApiService';

jest.mock('../../../ApiService', () => ({
  getChatrooms: jest.fn(),
}));

const mockedGetChatrooms = getChatrooms as jest.Mock<any>;

describe('ChatroomsList component', () => {
  beforeEach(() => {
    mockedGetChatrooms.mockResolvedValue([
      chatroom1, 
      chatroom2
    ]);
  });

  it('should display chatroom list', async () => {
    await act(async () => {
      renderWithProviders(<ChatroomsList />);
    });

    const chatroom1Text = screen.getByText('Hello...');
    const chatroom2Text = screen.getByText('Hallo...');

    expect(chatroom1Text).toBeInTheDocument();
    expect(chatroom2Text).toBeInTheDocument();
  });

  it('should fetch chatrooms on initialization', async () => {
    await act(async () => {
      renderWithProviders(<ChatroomsList />);
    });

    await waitFor(() => {
      expect(getChatrooms).toHaveBeenCalled();
    });
  });
});
