import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/entry.css';

function JournalEntry({ entry }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(entry.mdPath)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [entry]);

  return (
    <div className="journal-entry">
      <div className="entry-image-container">
        <img src={entry.image} alt={entry.title} className="entry-image" />
      </div>
      <div className="entry-text">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default JournalEntry;
