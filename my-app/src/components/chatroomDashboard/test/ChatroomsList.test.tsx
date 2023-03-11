import React from 'react';
import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import ChatroomsList from '../ChatroomsList';
import { renderWithProviders } from '../../../test/testUtils';
import { getChatrooms } from '../../../ApiService';

jest.mock('../../../ApiService', () => ({
  getChatrooms: jest.fn(),
}));

const mockedGetChatrooms = getChatrooms as jest.Mock<any>;

describe('ChatroomsList component', () => {
  beforeEach(() => {
    mockedGetChatrooms.mockResolvedValue([
      {
        chatroomId: '1',
        name: 'Chatroom 1',
        messages: [],
      },
      {
        chatroomId: '2',
        name: 'Chatroom 2',
        messages: [],
      },
    ]);
  });

  it('should display chatroom list', async () => {
    await act(async () => {
      renderWithProviders(<ChatroomsList />);
    });

    const chatroom1 = screen.getByText('Chatroom 1');
    const chatroom2 = screen.getByText('Chatroom 2');

    expect(chatroom1).toBeInTheDocument();
    expect(chatroom2).toBeInTheDocument();
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
