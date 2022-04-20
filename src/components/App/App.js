import React, { useState, useEffect } from 'react';
import './App.css';
import getQuotes from '../../apiCalls';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Entries from '../Entries/Entries';
import { Route } from 'react-router-dom';

function App() {
  const [quotes, setQuotes] = useState('');
  const [error, setError] = useState('')
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    getQuotes()
    .then(data => setQuotes(data))
    .catch(error => {
      setError('Hmm.. something went wrong')

    })
  }, [])

  const addEntry = (newEntry) => {
    console.log(entries, "this is entries")
    setEntries([...entries, newEntry]);
  }


  return (
    <div className="App">
      <Route exact path='/'>
        <Header />
        <Form quotes={quotes} addEntry={addEntry}/>
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
