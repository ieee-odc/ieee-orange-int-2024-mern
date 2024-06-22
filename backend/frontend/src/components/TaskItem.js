import React, { useState } from 'react';
import './TaskItem.css';
import EditTask from './EditTask';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <EditTask task={task} onUpdate={onUpdate} onEditEnd={toggleEdit} />
      ) : (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
