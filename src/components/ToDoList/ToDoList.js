import React from 'react';
import './ToDoList.css';

const ToDoList = ({todos}) => {
  return (
    <div className='todo-list'>
      <h2>todo list</h2>
      {!todos.length && <h3>all tasks completed</h3>}
    </div>
  )
}

export default ToDoList;