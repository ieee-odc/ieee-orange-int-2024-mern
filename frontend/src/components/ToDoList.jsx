
import React from 'react';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, handleEdit, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          <h5>{todo.title}</h5>
          <p>{todo.description}</p>
          <button className="edit-btn" onClick={() => handleEdit(todo)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
