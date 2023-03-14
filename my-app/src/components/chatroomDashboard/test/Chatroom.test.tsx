import React from 'react';
import { screen} from '@testing-library/react';
import Chatroom from '../Chatroom';
import { renderWithProviders, chatroom1 } from '../../../test/testUtils';

describe('Chatroom', () => {
  it('should render a chatroom', async () => {
    renderWithProviders(<Chatroom chatroom={chatroom1}/>);
    const chatroom1Text = screen.getByText('Hello...');

    expect(chatroom1Text).toBeInTheDocument();
  });
});


// const message = 'Hello world';
// const input = screen.getByLabelText('Message');
// const button = screen.getByText('Send');

// fireEvent.change(input, { target: { value: message } });
// fireEvent.click(button);

// await waitFor(() => {
//   expect(screen.getByText(message)).toBeInTheDocument();
// });