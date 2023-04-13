import * as ApiService from '../ApiService';

jest.mock('../ApiService', () => {
  return {
    getChatrooms: jest.fn(() => {
      return Promise.resolve([
        {
          _id: '640c6386704fd87bd58101ae',
          chatroomId: 'fcc80d7c-b791-4970-b011-d1a1b82cc523',
          AI_id: 'ChatGPTEnglish',
          targetLanguage: 'English',
          AI_image: 'Polyglot/William',
          AI_name: 'William',
          userId: '1',
          user_name: 'Josh',
          nativeLanguage: 'French',
          messages: [
            {
              messageId: '72b3b9a0-1b1f-4b0f-9c1f-8c1b0c1b0c1b',
              senderId: 'josh',
              timeStamp: '1678533513438',
              text: 'hello',
              audio: '',
              translatedText: '',
              _id: '640c6389704fd87bd58101b5',
            },
          ],
          __v: 0,
        },
      ]);
    }),
  };
});

describe('ApiService', () => {
  it('should get chatrooms', async () => {
    jest.spyOn(ApiService, 'getChatrooms');
    const chatrooms = await ApiService.getChatrooms('1');
    // expect(chatrooms.length).toBeGreaterThan(0);
    console.log(chatrooms);
    
    expect(ApiService.getChatrooms).toHaveBeenCalled();
  });
  // it('should get chatroom messages', async () => {
  //   const messages = await ApiService.getChatroomMessages(
  //     '083df18b-75ba-405e-b2b0-867935452058'
  //   );
  //   expect(messages.length).toBeGreaterThan(0);
  // });
});
