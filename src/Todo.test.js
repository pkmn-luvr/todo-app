import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

describe('Todo Component Tests', () => {
  // Smoke
  test('renders without crashing', () => {
    render(<Todo task="Test Task" />);
  });

  // Snapshot
  test('matches snapshot', () => {
    const { asFragment } = render(<Todo task="Test Task" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
