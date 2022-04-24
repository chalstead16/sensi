import React, {useState} from 'react';
import PropTypes from 'prop-types';
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

EntryCard.propTypes = {
  id: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  diaryEntry: PropTypes.string.isRequired,
  emotion: PropTypes.string,
  like: PropTypes.bool,
  handleLike: PropTypes.func.isRequired
}