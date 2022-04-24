import React from 'react';
import PropTypes from 'prop-types';
import './Entries.css';
import EntryCard from '../EntryCard/EntryCard';

const Entries = ({ entries, handleLike }) => {

  const entryCards = entries.map(entry => {
    return <EntryCard {...entry} key={entry.id} handleLike={handleLike}/>
  })

  return (
    <div className='entries-container'>
      {entryCards}
    </div>
  )
}

export default Entries;

Entries.propTypes = {
  entries: PropTypes.array.isRequired,
  handleLike: PropTypes.func.isRequired
}