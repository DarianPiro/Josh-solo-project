import { renderWithProviders } from '../../../test/testUtils';
import ChatDisplayFooter from '../ChatDisplayFooter';
import { screen } from '@testing-library/react';

describe('ChatDisplayFooter component', () => {
  it('should display a button', () => {
    renderWithProviders(<ChatDisplayFooter />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});