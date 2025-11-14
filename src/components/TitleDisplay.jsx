import React from 'react';

function TitleDisplay({ text, onNext }) {
  if (!text) {
    return null;
  }
  return (
    <div className="title-display" onClick={onNext}>
      <h1>{text}</h1>
      <div
        className="next-prompt"
        style={{ position: 'relative', opacity: 0.7 }}
      >
        ▼ Click to continue
      </div>
    </div>
  );
}

export default TitleDisplay;