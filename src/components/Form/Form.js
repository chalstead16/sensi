import React, {useState} from 'react';
import './Form.css';

const Form = ({ quotes, addEntry }) => {
  const [entry, setEntry] = useState('');

  const handleChange = (event) => {
    setEntry(event.target.value);
  }

  const submitEntry = (event) => {
    event.preventDefault();
    const newEntry = {
      id: Date.now(),
      quote: quotes.quote,
      author: quotes.author,
      diaryEntry: entry
    }
    addEntry(newEntry);
    clearInputs();
  }

  const clearInputs = () => {
    setEntry('')
  }

  return (
    <div className="form">
      <form>
        <h2 className="quote">"{quotes.quote}"</h2>
        <h3 className="quote-author">{quotes.author}</h3>
        <label>I'm currently feeling...</label>
        <textarea
          className='diary-entry'
          type='text'
          value={entry}
          onChange={event => handleChange(event)}
        />
        <button 
          className='submit-button'
          onClick={(event) => submitEntry(event)}
        >submit</button>
      </form>
    </div>
  )
}

export default Form;