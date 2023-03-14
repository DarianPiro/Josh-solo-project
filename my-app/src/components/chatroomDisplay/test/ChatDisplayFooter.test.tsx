import { renderWithProviders } from '../../../test/testUtils';
import ChatDisplayFooter from '../ChatDisplayFooter';
import { fireEvent, screen } from '@testing-library/react';

const handleSubmit = jest.fn();

describe('ChatDisplayFooter component', () => {
  it('should display a button', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should display a text input field', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('should display a microphone icon', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const mic = screen.getByTestId('start_recording');
    expect(mic).toBeInTheDocument();
  });
  it('should display a paper plane icon', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const plane = screen.getByTestId('send');
    expect(plane).toBeInTheDocument();
  });
  it('should change Text state when text is entered', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input).toHaveValue('Hello');
  });
  // it('should call handleSubmit when the send button is clicked', () => {
  //   renderWithProviders(<ChatDisplayFooter />);
  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
  // it('should call handleSubmit when the enter key is pressed', () => {
  //   renderWithProviders(<ChatDisplayFooter />);
  //   const input = screen.getByRole('textbox');
  //   fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
});
