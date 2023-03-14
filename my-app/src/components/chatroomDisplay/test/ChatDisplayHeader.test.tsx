import { renderWithProviders } from '../../../test/testUtils';
import ChatDisplayHeader from '../ChatDisplayHeader';
import { screen } from '@testing-library/react';

describe('ChatDisplayHeader component', () => {
  it('should display an image', () => {
    renderWithProviders(<ChatDisplayHeader />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});