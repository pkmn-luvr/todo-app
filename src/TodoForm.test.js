import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm Component Tests', () => {
  
  // Smoke
    test('renders without crashing', () => {
    render(<NewTodoForm />);
  });

  // Snapshot
  test('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Tests for Business Logic - Does submitting the form update DOM? 
  test('form submission calls addTodo prop', () => {
    const addTodoMock = jest.fn();
    const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);
    fireEvent.change(getByLabelText('Add a new task:'), { target: { value: 'New Task' } });
    fireEvent.click(getByText('Add Todo'));
    expect(addTodoMock).toHaveBeenCalledWith({ task: 'New Task', id: expect.any(Number) });
  });
});
