import React from 'react';
import './ToDoList.css';
import Task from '../Task/Task';

const ToDoList = ({ todos, handleTask, deleteTask }) => {

  const allTodos = todos.map( todo => {
    return (
        <Task 
          {...todo} 
          key={todo.id}
          handleTask={handleTask}
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