import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Task.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  handleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}