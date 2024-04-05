import React, { useState } from 'react';
import './Todo.css';

function Todo({ id, task, removeTodo, updateTodo, toggleComplete, isCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);


  // Toggles the edit mode on/off
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handler for task update
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  // FURTHER STUDY #2 - Strikethrough if completed
  const taskStyle = isCompleted ? { textDecoration: 'line-through' } : {};

  // Conditional rendering of ToDo component
  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }

  return (
    <div style={taskStyle}>
      {task}
      <button onClick={() => removeTodo(id)}>X</button>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleToggleComplete}>Mark as completed</button>
    </div>
  );
}

export default Todo;
