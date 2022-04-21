import React from 'react';
import './ToDoList.css';
import Task from '../Task/Task';

const ToDoList = ({ todos, deleteTask }) => {

  const allTodos = todos.map( todo => {
    return (
        <Task 
          {...todo} 
          key={todo.id}
          deleteTask={deleteTask}
          />
    )
  })

  return (
    <div className='todo-list'>
      <h2>todo list</h2>
      {!todos.length && <p>all tasks completed</p>}
      {allTodos}
    </div>
  )
}

export default ToDoList;