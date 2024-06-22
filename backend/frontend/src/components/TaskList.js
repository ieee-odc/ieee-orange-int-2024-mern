import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
