import React, { useState } from 'react';
import '../styles/journal.css';
import { journalEntries } from '../data/journalEntries';
import JournalEntry from '../components/JournalEntry';

function Journal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const entry = journalEntries[currentIndex];

  const nextEntry = () => {
    if (currentIndex < journalEntries.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevEntry = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="journal-page">
      <h2 className="journal-title">Camino Journal</h2>

      <JournalEntry entry={entry} />

      <div className="journal-navigation">
        <button onClick={prevEntry} disabled={currentIndex === 0}>
          ← Previous
        </button>
        <span>{currentIndex + 1} / {journalEntries.length}</span>
        <button onClick={nextEntry} disabled={currentIndex === journalEntries.length - 1}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Journal;
