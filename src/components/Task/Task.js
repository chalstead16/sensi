import React, { useState } from 'react';
import './Task.css';

const Task = ({ todo, id, deleteTask }) => {
  const [taskStatus, setTaskStatus] = useState(false);

  const handleChange = () => {
    !taskStatus ? setTaskStatus(true): setTaskStatus(false);
  }

  return (
    <form className='task'>
      <input 
        type='checkbox'
        checked={taskStatus}
        onChange={() => handleChange()}
      />
      <p>{todo}</p>
      <button
        className='delete-button'
        onClick={() => deleteTask(id)}
      >x</button>
    </form>
  )
}

export default Task;