import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('Renders text', () => {
  render(<Home />);
  const text = screen.getByText(/Hello world/i);
  expect(text).toBeInTheDocument();
});
