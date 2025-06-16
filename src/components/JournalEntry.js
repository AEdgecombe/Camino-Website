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
    <div
      className="journal-entry-bg"
      style={{ backgroundImage: `url(${entry.image})` }}
    >
      <div className="journal-entry-overlay" />
      <div className="journal-entry-content">
        <div className="entry-text">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default JournalEntry;
