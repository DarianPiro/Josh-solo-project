import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import CreateChat from '../CreateChat';
import { renderWithProviders } from '../../test/testUtils';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';

// jest.mock('../CreateChat', () => 
//   ({
//     ...jest.requireActual('../CreateChat'),
//     createChat: jest.fn().mockResolvedValue({
//       chatroomId: 'b2840857-13c2-4584-8adb-93266dd4f576',
//       AI_id: 'ChatGPTEnglish',
//       targetLanguage: 'English',
//       AI_image: 'Polyglot/William',
//       AI_name: 'William',
//       userId: 'josh',
//       user_name: 'Josh',
//       nativeLanguage: 'French',
//       messages: [
//         {
//           messageId: 'c7dce221-cfbb-4680-a2f1-876b6908f8ed',
//           senderId: 'ChatGPTEnglish',
//           senderName: 'William',
//           timeStamp: '1678707317392',
//           text: 'Test',
//           audio: '',
//           translatedText: '',
//           _id: '640f0a75b99e4014f757250d',
//         },
//       ],
//       _id: '640f0a75b99e4014f757250c',
//       __v: 0,
//     }),}
//   )
// );

describe('CreateChat', () => {
  it('should render the component', () => {
    renderWithProviders(<CreateChat />);
    const selectLanguage = screen.getByText(
      'Which language would you like to learn?'
    );
    const selectNativeLanguage = screen.getByText(
      "What's your native language?"
    );
    const submitButton = screen.getByText("Let's go!");
    expect(selectLanguage).toBeInTheDocument();
    expect(selectNativeLanguage).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

test('calls the createChat function on submit with the selected languages', async () => {
  const mockedUseNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: jest.fn().mockImplementation(() => ({})),
  }));

  const consoleSpy = jest.spyOn(console, 'log');

  const createChat = jest.fn().mockResolvedValue({
    chatroomId: 'b2840857-13c2-4584-8adb-93266dd4f576',
    AI_id: 'ChatGPTEnglish',
    targetLanguage: 'English',
    AI_image: 'Polyglot/William',
    AI_name: 'William',
    userId: 'josh',
    user_name: 'Josh',
    nativeLanguage: 'French',
    messages: [
      {
        messageId: 'c7dce221-cfbb-4680-a2f1-876b6908f8ed',
        senderId: 'ChatGPTEnglish',
        senderName: 'William',
        timeStamp: '1678707317392',
        text: 'Test',
        audio: '',
        translatedText: '',
        _id: '640f0a75b99e4014f757250d',
      },
    ],
    _id: '640f0a75b99e4014f757250c',
    __v: 0,
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <CreateChat />
      </Provider>
    </BrowserRouter>
  );

  const selectLanguage = screen.getByText(
    'Which language would you like to learn?'
  );
  fireEvent.keyDown(selectLanguage, { key: 'ArrowDown' });
  fireEvent.keyDown(selectLanguage, { key: 'Enter' });

  const selectNativeLanguage = screen.getByText("What's your native language?");
  fireEvent.keyDown(selectNativeLanguage, { key: 'ArrowDown' });
  fireEvent.keyDown(selectNativeLanguage, { key: 'ArrowDown' });
  fireEvent.keyDown(selectNativeLanguage, { key: 'Enter' });

  const submitButton = screen.getByText("Let's go!");
  fireEvent.click(submitButton);

  // expect(await screen.findByText('Hey')).toBeInTheDocument();
  // await waitFor(() => expect(createChat).toHaveBeenCalled());
  // await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalled());
  await waitFor(() =>
    expect(consoleSpy).toHaveBeenCalledWith('native language :French')
  );
  await waitFor(() =>
    expect(consoleSpy).toHaveBeenCalledWith('target language :English')
  );
  // await waitFor(() => expect(consoleSpy).toHaveBeenCalledWith({
  //   chatroomId: '80960da7-0849-4994-8d02-401bb0203681',
  //   AI_id: 'ChatGPTEnglish',
  //   targetLanguage: 'English',
  //   AI_image: 'Polyglot/William',
  //   AI_name: 'William',
  //   userId: 'josh',
  //   user_name: 'Josh',
  //   nativeLanguage: 'French',
  //   messages: [
  //     {
  //       messageId: 'b6a96abe-d90d-4abe-b0ed-feba85bbcca6',
  //       senderId: 'ChatGPTEnglish',
  //       senderName: 'William',
  //       timeStamp: Date.now(),
  //       text: 'Hey',
  //       audio: '',
  //       translatedText: '',
  //       _id: '640f3c1bb99e4014f7572546'
  //     }
  //   ],
  //   _id: '640f3c1bb99e4014f7572545',
  //   __v: 0
  // }))
});
