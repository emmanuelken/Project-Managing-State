import React, { useState } from 'react';

function TaskItem({ task, editTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskDetails, setTaskDetails] = useState({ name: task.name, description: task.description });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask({ ...task, ...taskDetails });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="name"
            value={taskDetails.name}
            onChange={handleEditChange}
            required
          />
          <input
            type="text"
            name="description"
            value={taskDetails.description}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
          <button className="complete" onClick={() => toggleComplete(task.id)}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
