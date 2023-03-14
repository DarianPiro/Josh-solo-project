import { renderWithProviders } from '../../../test/testUtils';
import MessageTo from '../MessageTo';
import { screen } from '@testing-library/react';

describe('MessageTo', () => {
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
  
  it('should display an image', () => {
    renderWithProviders(<MessageTo message={message}/>);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('renders a message', () => {
    renderWithProviders(<MessageTo message={message}/>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
