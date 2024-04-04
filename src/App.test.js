import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
  // Smoke
  test('renders without crashing', () => {
    render(<App />);
  });


// Snapshot
  test('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
