import * as ApiService from '../ApiService';

// const getChatrooms = jest.fn(() =>
//   Promise.resolve([
//     {
//       chatroomId: '1',
//       AI_id: '1',
//       AI_image: '1',
//       AI_name: '1',
//       messages: [],
//       nativeLanguage: '1',
//       targetLanguage: '1',
//       userId: '1',
//       user_name: '1',
//     },
//   ])
// );

// const getChatroomMessages = jest.fn(() =>
//   Promise.resolve([
//     {
//       messageId: '1',
//       senderId: '1',
//       senderName: '1',
//       timeStamp: '1',
//       text: '1',
//       audio: '1',
//       translatedText: '1',
//     },
//   ])
// )

describe('ApiService', () => {
  it('should get chatrooms', async () => {
    const chatrooms = await ApiService.getChatrooms();
    expect(chatrooms.length).toBeGreaterThan(0);
  //   expect(chatrooms[0]).toEqual(
  //     {
  //       _id: '6409d3d59d75096dcd43dc1b',
  //       chatroomId: '083df18b-75ba-405e-b2b0-867935452058',
  //       AI_id: 'ChatGPTPortuguese',
  //       targetLanguage: 'Portuguese',
  //       AI_image: 'Polyglot/Rodrigo',
  //       AI_name: 'Rodrigo',
  //       userId: 'josh',
  //       user_name: 'Josh',
  //       nativeLanguage: 'German',
  //       messages: [ [Object], [Object] ],
  //       __v: 0
  //     }
  //   );
  });
  it('should get chatroom messages', async () => {
    const messages = await ApiService.getChatroomMessages('083df18b-75ba-405e-b2b0-867935452058');
    expect(messages.length).toBeGreaterThan(0);
    expect(messages).toEqual([
      {
        _id: '6409d3d59d75096dcd43dc1b',
        chatroomId: '083df18b-75ba-405e-b2b0-867935452058',
        AI_id: 'ChatGPTPortuguese',
        targetLanguage: 'Portuguese',
        AI_image: 'Polyglot/Rodrigo',
        AI_name: 'Rodrigo',
        userId: 'josh',
        user_name: 'Josh',
        nativeLanguage: 'German',
        messages: [
          {
            messageId: '30bf9502-e733-4924-a8af-013e18437c75',
            senderId: 'ChatGPTPortuguese',
            senderName: 'Rodrigo',
            timeStamp: '1678365653913',
            text: 'Olá',
            audio: '',
            translatedText: '',
            _id: '6409d3d59d75096dcd43dc1c'
          },
          {
            messageId: 'ddeb3684-e7a9-4815-9d15-ca2da6c4471d',
            senderId: 'josh',
            senderName: 'Josh',
            timeStamp: '1678365690261',
            text: 'hello',
            audio: '',
            translatedText: '',
            _id: '6409d3fa9d75096dcd43dc22'
          }
        ],
        __v: 0
      }
    ]);
  });
});
