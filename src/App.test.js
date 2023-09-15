import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  const { getByText } = render(<App />);
  
  // Replace this assertion with one that matches content from your components
  const headerElement = getByText(/Gideon kiplagat/i);
  
  // Replace this expectation with what you expect to be in your component
  expect(headerElement).toBeInTheDocument();
});
