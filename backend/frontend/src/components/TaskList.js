import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Fetching tasks from backend...");
    axios.get('/api/tasks')
      .then(response => {
        console.log("Tasks fetched:", response.data);
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const handleDeleteTask = (id) => {
    console.log("Deleting task with id:", id);
    axios.delete(`/api/tasks/${id}`)
      .then(() => {
        console.log("Task deleted");
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  };

  return (
    <div className="task-list">
      <AddTask onAdd={handleAddTask} />
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
