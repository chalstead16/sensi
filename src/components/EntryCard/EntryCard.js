import React, {useState} from 'react';
import './EntryCard.css';

const EntryCard = ({ id, quote, author, diaryEntry, emotion, like, handleLike}) => {

  return (
    <div className='card'>
      <div className='entry-text'>
        <p>{quote}</p>
        <p>{author}</p>
        <p className='emotional-state'>emotion: <em>{emotion}</em></p>
        <p className="entry">{diaryEntry}</p>
      </div>  
      <div className='button-container'>
        <button
          className="like-button"
          onClick={() => handleLike(id)}>{like ? '🧡' : '🤍'}
        </button>
      </div>
    </div>
  )
}

export default EntryCard;