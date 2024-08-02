import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
