import { renderWithProviders } from '../../../test/testUtils';
import MessageFrom from '../MessageFrom';
import { screen } from '@testing-library/react';

describe('MessageFrom', () => {
  const message = {
    text: 'Hello',
    timeStamp: 12534,
    audio: '',
    from: '123',
    to: '456',
    id: '123456789',
    grammar: '',
    translation: '',
  };
  const AI_image = './testimage.png';

  it('should display an image', () => {
    renderWithProviders(<MessageFrom message={message} AI_image={AI_image} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('should render a message', () => {
    renderWithProviders(<MessageFrom message={message} AI_image={AI_image} />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
