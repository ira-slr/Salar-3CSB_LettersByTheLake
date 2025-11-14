import React from 'react';

function TitleDisplay({ text }) {
  if (!text) {
    return null;
  }
  return (
    <div className="title-display">
      <h1>{text}</h1>
    </div>
  );
}

export default TitleDisplay;