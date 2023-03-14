import React from 'react';
import { screen} from '@testing-library/react';
import Dashboard from '../Dashboard';
import { renderWithProviders } from '../../test/testUtils';

describe('Dashboard', () => {
  it('should render the component', () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
    renderWithProviders(<Dashboard />);
    const userProfile = screen.getByText('Josh');
    const button1 = screen.getByText('AI Chat');
    const button2 = screen.getByText('Translate Text');
    expect(userProfile).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
}
);

