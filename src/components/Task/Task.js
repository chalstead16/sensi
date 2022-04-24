import React, { useState } from 'react';
import './Task.css';

const Task = ({ todo, id, checked, handleTask, deleteTask }) => {

  return (
    <form className='task'>
      <input
        className='checkbox' 
        type='checkbox'
        checked={checked}
        onChange={() => handleTask(id)}
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