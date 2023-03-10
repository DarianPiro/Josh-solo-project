import * as ApiService from '../ApiService';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// jest.mock('./ApiService', () => ({
//   getChatrooms: jest.fn(() =>
//     Promise.resolve([
//       {
//         chatroomId: '1',
//         AI_id: '1',
//         AI_image: '1',
//         AI_name: '1',
//         messages: [],
//         nativeLanguage: '1',
//         targetLanguage: '1',
//         userId: '1',
//         user_name: '1',
//       },
//     ])
//   ),
// }));

// describe('ApiService', () => {
//   it('should get all chatrooms', async () => {
//     const chatrooms = await ApiService.getChatrooms();
//     expect(chatrooms.length).toBe(1);
//   });
// });
