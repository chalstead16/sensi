import React from 'react';
import EntryCard from '../EntryCard/EntryCard';

const Entries = ({ entries }) => {

  const entryCards = entries.map(entry => {
    return (
      <div key={entry.id}>
        <EntryCard {...entry}/>
      </div>
    )
  })

  return (
    <div className='entries-container'>
      {entryCards}
    </div>
  )
}

export default Entries;