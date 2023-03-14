import { renderWithProviders } from '../../../test/testUtils';
import ChatDisplayMessage from '../ChatDisplayMessage';
import { screen } from '@testing-library/react';

describe('ChatDisplayMessage component', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};

  it('should display an image', () => {
    renderWithProviders(<ChatDisplayMessage />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should render a message', () => {
    const messages = [{
      text: 'Hello',
      timeStamp: 12534,
      audio: '',
      from: '123',
      to: '456',
      id: '123456789',
      grammar: '',
      translation: '',
    }];
    renderWithProviders(<ChatDisplayMessage messages={messages}/>);
    expect(screen.getByText('1:00 AM')).toBeInTheDocument();
  });
});