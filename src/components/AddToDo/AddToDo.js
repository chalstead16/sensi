import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddToDo.css';

const AddToDo = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleClick = (event) => {
    setTask(event.target.value);
  }

  const submitTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      checked: false,
      todo: task
    }
    addTask(newTodo);
    clearInputs();
  }

  const clearInputs = () => {
    setTask('')
  }

  return (
    <form className='add-todo'>
      <h2>add tasks</h2>
      <input
        className='add-task-input'
        type='text'
        value={task}
        onChange={event => (handleClick(event))}
      />
      <button
        className='submit-task'
        onClick={(event) => submitTodo(event)}
      >submit</button>
    </form>
  )
}

export default AddToDo;

AddToDo.propTypes = {
  addTask: PropTypes.func.isRequired
}