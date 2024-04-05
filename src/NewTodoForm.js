import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, id: Date.now() });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
  <label htmlFor="new-todo">Add a new task:</label>
  <input
    id="new-todo"
    type="text"
    value={task}
    onChange={(e) => setTask(e.target.value)}
    placeholder="Add a new task"
  />
  <button type="submit">Add Todo</button>
</form>
  );
}

export default NewTodoForm;
