import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import './App.css';

const  App=() => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todo');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/todo', { title, description });
      setTodos([...todos, response.data.todo]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/todo/${id}`, { title, description });
      const updatedTodos = todos.map((todo) => (todo._id === id ? response.data.todo : todo));
      setTodos(updatedTodos);
      setTitle('');
      setDescription('');
      setEditing(false);
      setCurrentTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = (todo) => {
    setEditing(true);
    setCurrentTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateTodo(currentTodo._id);
    } else {
      addTodo();
    }
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        editing={editing}
      />
      <TodoList todos={todos} handleEdit={handleEdit} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
