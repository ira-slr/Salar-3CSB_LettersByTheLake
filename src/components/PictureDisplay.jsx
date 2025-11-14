import React from 'react';

function PictureDisplay({ description }) {
  if (!description) {
    return null;
  }

  const isImagePath = description.startsWith('/') || description.startsWith('http');

  return (
    <div className="picture-display">
      {isImagePath ? (
        <img src={description} alt="In-game scene" />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}

export default PictureDisplay;