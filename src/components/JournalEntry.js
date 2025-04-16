import React from 'react';
import '../styles/entry.css';

function JournalEntry({ entry }) {
  return (
    <div className="journal-entry">
      <h3>{entry.title}</h3>
      <p><em>{entry.date}</em></p>
      <img src={entry.image} alt={entry.title} className="entry-image" />
      <p>{entry.content}</p>
    </div>
  );
}

export default JournalEntry;
