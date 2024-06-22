import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    axios.post('/api/tasks', newTask)
      .then(response => {
        onAdd(response.data);
        setNewTask({ title: '', description: '' });
      })
      .catch(error => {
        console.error('There was an error adding the task!', error);
      });
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
