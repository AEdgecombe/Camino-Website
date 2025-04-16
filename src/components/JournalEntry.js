import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/entry.css';

function JournalEntry({ entry }) {
  return (
    <div className="journal-entry">
      <div className="entry-image-container">
        <img src={entry.image} alt={entry.title} className="entry-image" />
      </div>
      <div className="entry-text">
        <h3>{entry.title}</h3>
        <p className="entry-date"><em>{entry.date}</em></p>

        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="entry-content" {...props} />,
            ul: ({ node, ...props }) => <ul className="entry-list" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="entry-quote" {...props} />,
            h3: ({ node, ...props }) => <h3 className="entry-subheading" {...props} />,
          }}
        >
          {entry.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default JournalEntry;
