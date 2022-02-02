import { render, screen } from '@testing-library/react';
import App from './App';

test('Whats Your Order Name?', () => {
  render(<App />);
  const linkElement = screen.getByText(/Whats Your Order Name?/i);
  expect(linkElement).toBeInTheDocument();
});
