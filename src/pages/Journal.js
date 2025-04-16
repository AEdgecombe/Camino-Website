import React from 'react';
import '../styles/journal.css';
import { journalEntries } from '../data/journalEntries';
import JournalEntry from '../components/JournalEntry';

function Journal() {
  return (
    <div className="journal-container">
      <h2>Daily Journal</h2>
      {journalEntries.map((entry, index) => (
        <JournalEntry key={index} entry={entry} />
      ))}
    </div>
  );
}

export default Journal;
