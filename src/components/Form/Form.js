import React, {useState} from 'react';
import './Form.css';

const Form = ({ quotes, addEntry }) => {
  const [entry, setEntry] = useState('');
  const [currentEmotion, setCurrentEmotion] = useState('');

  const handleChange = (event) => {
    setEntry(event.target.value);
  }

  const handleClick = (emotion) => {
    setCurrentEmotion(emotion);
  }

  const submitEntry = (event) => {
    event.preventDefault();
    const newEntry = {
      id: Date.now(),
      quote: quotes.quote,
      author: quotes.author,
      emotion: currentEmotion,
      diaryEntry: entry,
      like: false
    }
    addEntry(newEntry);
    clearInputs();
  }

  const clearInputs = () => {
    setCurrentEmotion('');
    setEntry('');
  }

  return (
    <div className="form">
      <form className='main-form'>
        <h2 className="quote">"{quotes.quote}"</h2>
        <h3 className="quote-author">{quotes.author}</h3>
        <h3>i'm currently feeling...</h3>
        <div className='emotion-form'>
          <img className='excited' src='excited.png' alt='excited' onClick={() => handleClick('excited')}/>
          <img className='happy' src='happy.png' alt='happy' onClick={() => handleClick('happy')}/>
          <img className='neutral' src='neutral.png' alt='neutral' onClick={() => handleClick('neutral')}/>
          <img className='upset' src='upset.png' alt='upset' onClick={() => handleClick('upset')}/>
          <img className='tired' src='tired.png' alt='tired' onClick={() => handleClick('tired')}/>
        </div>
        <h3>my thoughts...</h3>
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