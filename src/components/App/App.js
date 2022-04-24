import React, { useState, useEffect } from 'react';
import './App.css';
import getQuotes from '../../apiCalls';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';
import AddToDo from '../AddToDo/AddToDo';
import Entries from '../Entries/Entries';
import Error from '../Error/Error';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [quotes, setQuotes] = useState('');
  const [error, setError] = useState('');
  const [entries, setEntries] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getQuotes()
    .then(data => setQuotes(data))
    .catch(err => {
      setError(err.message)
    })
  }, [])

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  }

  const handleLike = (id) => {
    const updatedEntries = entries.map(entry => {
      if(entry.id === id) {
        entry.like = !entry.like
      } return entry
    })
    setEntries(updatedEntries)
  }

  const addTask = (newTask) => {
    setTodos([...todos, newTask]);
  }

  const handleTask = (id) => {
    const updatedTasks = todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked
      } return todo;
    })
    setTodos(updatedTasks)
  }

  const deleteTask = (id) => {
    const filteredTasks = todos.filter(task => task.id != id);

    setTodos(filteredTasks)
  }

  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
        <Header />
        <Form 
          quotes={quotes}
          addEntry={addEntry}
        />
        <ToDoList 
          todos={todos} 
          handleTask={handleTask} 
          deleteTask={deleteTask}
        />
        <AddToDo addTask={addTask} />
      </Route>
      <Route exact path='/entries'>
        <Header />
        {!entries.length && <h2>no previous entries yet</h2>}
        <Entries entries={entries} handleLike={handleLike}/>
      </Route>
      <Route>
        <Redirect to='/error' />
        <Header />
        <Error />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
