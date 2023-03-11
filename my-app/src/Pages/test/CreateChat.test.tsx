import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import CreateChat from '../CreateChat';
import { renderWithProviders } from '../../test/testUtils';

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
  const createChat = jest.fn();
  renderWithProviders(<CreateChat />);

  const selectLanguage = screen.getByText(
    'Which language would you like to learn?'
  );
  const selectNativeLanguage = screen.getByText("What's your native language?");
  const submitButton = screen.getByText("Let's go!");

  fireEvent.change(selectLanguage, { target: { value: 'French' } });
  fireEvent.change(selectNativeLanguage, { target: { value: 'English' } });
  fireEvent.click(submitButton);

  await waitFor(() =>
    expect(createChat).toHaveBeenCalledWith({
      chatroomId: expect.any(String),
      AI_id: 'ChatGPTFrench',
      AI_image: '',
      AI_name: '',
      targetLanguage: 'French',
      userId: 'josh',
      user_name: 'Josh',
      nativeLanguage: 'English',
      messages: [
        {
          messageId: expect.any(String),
          senderId: 'ChatGPTFrench',
          senderName: '',
          timeStamp: expect.any(Number),
          text: '',
          audio: '',
          translatedText: '',
        },
      ],
    })
  );
});
