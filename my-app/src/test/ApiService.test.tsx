import * as ApiService from '../ApiService';

jest.mock('../ApiService', () => ({
  getChatrooms: jest.fn(() =>
    Promise.resolve([
      {
        chatroomId: '1',
        AI_id: '1',
        AI_image: '1',
        AI_name: '1',
        messages: [],
        nativeLanguage: '1',
        targetLanguage: '1',
        userId: '1',
        user_name: '1',
      },
    ])
  ),
  getChatroomMessages: jest.fn(() =>
    Promise.resolve([
      {
        messageId: '1',
        senderId: '1',
        senderName: '1',
        timeStamp: '1',
        text: '1',
        audio: '1',
        translatedText: '1',
      },
    ])
  ),
}));

describe('ApiService', () => {
  it('should get chatrooms', async () => {
    const chatrooms = await ApiService.getChatrooms();
    console.log('chatrooms:', chatrooms);
    expect(chatrooms).toEqual([
      {
        chatroomId: '1',
        AI_id: '1',
        AI_image: '1',
        AI_name: '1',
        messages: [],
        nativeLanguage: '1',
        targetLanguage: '1',
        userId: '1',
        user_name: '1',
      },
    ]);
  });
  it('should get chatroom messages', async () => {
    const messages = await ApiService.getChatroomMessages('1');
    expect(messages).toEqual([
      {
        messageId: '1',
        senderId: '1',
        senderName: '1',
        timeStamp: '1',
        text: '1',
        audio: '1',
        translatedText: '1',
      },
    ]);
  });
});
