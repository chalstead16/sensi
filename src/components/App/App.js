import React, { useState, useEffect } from 'react';
import './App.css';
import getQuotes from '../../apiCalls';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ToDoList from '../ToDoList/ToDoList';
import AddToDo from '../AddToDo/AddToDo';
import Entries from '../Entries/Entries';
import { Route } from 'react-router-dom';

function App() {
  const [quotes, setQuotes] = useState('');
  const [error, setError] = useState('');
  const [entries, setEntries] = useState([]);
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(false);


  useEffect(() => {
    getQuotes()
    .then(data => setQuotes(data))
    .catch(error => {
      setError('Hmm.. something went wrong')

    })
  }, [])

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  }

  const addTask = (newTask) => {
    setTodos([...todos, newTask]);
  }

  const deleteTask = (id) => {
    const filteredTasks = todos.filter(task => task.id != id);

    setTodos(filteredTasks)
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <Header />
        <Form quotes={quotes} addEntry={addEntry}/>
        <ToDoList todos={todos} deleteTask={deleteTask}/>
        <AddToDo addTask={addTask} />
      </Route>
      <Route exact path='/entries'>
        <Header />
        {!entries.length && <h2>no previous entries yet</h2>}
        <Entries entries={entries}/>
      </Route>
    </div>
  );
}

export default App;
