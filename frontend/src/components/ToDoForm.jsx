
import React from 'react';

const TodoForm = ({ title, setTitle, description, setDescription, handleSubmit, editing }) => {
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="form-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="form-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="submit-btn">
        {editing ? 'Update' : 'Add'} Todo
      </button>
    </form>
  );
};

export default TodoForm;
