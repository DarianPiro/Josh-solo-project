

// jest.mock('../ApiService', () => ({
//   createChatRoom: jest.fn(() =>
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
//         __v: 1,
//         _id: '1',
//       },
//     ])
//   ),
// }));

// it('should create a chatroom', async () => {
  
//   const data = {
//     chatroomId: '1',
//     AI_id: '1',
//     AI_image: '1',
//     AI_name: '1',
//     messages: [],
//     nativeLanguage: '1',
//     targetLanguage: '1',
//     userId: '1',
//     user_name: '1',
//   };

// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CreateChat } from '../create-chat';

describe('CreateChat', () => {
  it('should render the component', () => {
    render(<CreateChat />);
    expect(screen.getByText('Which language would you like to learn?')).toBeInTheDocument();
    expect(screen.getByText("What's your native language?")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /let's go!/i })).toBeInTheDocument();
  });
  
});
