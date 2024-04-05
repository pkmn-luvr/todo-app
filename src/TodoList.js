import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, {...newTodo, isCompleted: false}]); // FURTHER STUDY #2 - Included isCompleted property
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // FURTHER STUDY - Add function that updates task text in its state & passes it down to each Todo component
  const updateTodo = (id, updatedTask) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo));
  };

  // FURTHER STUDY - Strikethrough upon completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete} 
        isCompleted={todo.isCompleted} 
      />
      ))}
    </div>
  );
}


export default TodoList;
