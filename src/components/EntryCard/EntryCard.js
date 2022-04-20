import React, {useState} from 'react';
import './EntryCard.css';

const EntryCard = ({ quote, author, diaryEntry}) => {
  const [like, setLike] = useState(false)

  const addLike = () => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false)
    }
  }

  return (
    <div className='card'>
      <p>{quote}</p>
      <p>{author}</p>
      <p className="diary-entry">{diaryEntry}</p>
      <button
        className="like-button"
        onClick={() => addLike()}>{like ? '🧡' : '🤍'}</button>
    </div>
  )
}

export default EntryCard;