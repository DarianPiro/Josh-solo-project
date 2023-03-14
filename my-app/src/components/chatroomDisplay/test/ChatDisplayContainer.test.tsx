import { renderWithProviders } from '../../../test/testUtils';
import ChatDisplayContainer from '../ChatDisplayContainer';
import { screen } from '@testing-library/react';

describe('ChatDisplayContainer', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};

  it('renders ChatDisplayHeader component', () => {
    renderWithProviders(<ChatDisplayContainer />);
    expect(screen.getByTestId('chat_display_header')).toBeInTheDocument();
  });

  it('renders ChatDisplayMessage component', () => {
    renderWithProviders(<ChatDisplayContainer />);
    expect(screen.getByTestId('message_wrapper')).toBeInTheDocument();
  });

  it('renders ChatDisplayFooter component', () => {
    renderWithProviders(<ChatDisplayContainer />);
    expect(screen.getByTestId('message_footer_wrapper')).toBeInTheDocument();
  });
});
