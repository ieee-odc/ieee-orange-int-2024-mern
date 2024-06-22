import React, { useState } from 'react';
import axios from 'axios';
import './EditTask.css';

const EditTask = ({ task, onUpdate, onEditEnd }) => {
  const [updatedTask, setUpdatedTask] = useState({ title: task.title, description: task.description });

  const handleUpdateTask = () => {
    axios.patch(`/api/tasks/${task._id}`, updatedTask)
      .then(response => {
        onUpdate(response.data);
        onEditEnd();
      })
      .catch(error => {
        console.error('There was an error updating the task!', error);
      });
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={updatedTask.title}
        onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
      />
      <input
        type="text"
        value={updatedTask.description}
        onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default EditTask;
