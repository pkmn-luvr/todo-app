import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component Tests', () => {
  // Smoke
    test('renders without crashing', () => {
    render(<TodoList />);
  });

  // Snapshot
  test('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Business Logic Testing  - Can user add an item to todo list? 
  test('allows users to add and remove a todo', () => {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);
    const input = getByLabelText('Add a new task:');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(getByText('Add Todo'));

    // Checks if new todo is added
    expect(queryByText('Test Todo')).toBeInTheDocument();

    // Checks if todo remove button appears
    fireEvent.click(getByText('X'));
    expect(queryByText('Test Todo')).not.toBeInTheDocument();
  });
});
