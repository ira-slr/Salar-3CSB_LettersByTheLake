import React from 'react';

function ChoiceBox({ options, onSelect }) {
  if (!options) {
    return null;
  }

  return (
    <div className="choice-box">
      {options.map((option, index) => (
        <button key={index} onClick={() => onSelect(option)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceBox;