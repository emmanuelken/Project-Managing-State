import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskDetails, setTaskDetails] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDetails.name && taskDetails.description) {
      addTask({ ...taskDetails, id: Date.now(), completed: false });
      setTaskDetails({ name: '', description: '' });
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={taskDetails.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        name="description"
        value={taskDetails.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
