import React from 'react';

function DialogueBox({ dialogue, narration, onNext }) {
  if (!dialogue && !narration) {
    return null;
  }

  return (
    <div className="dialogue-box" onClick={onNext}>
      {dialogue && (
        <>
          <div className="character-name">{dialogue.character}</div>
          <div className="dialogue-text">{dialogue.text}</div>
        </>
      )}
      {narration && <div className="narration-text">{narration}</div>}
      <div className="next-prompt">▼ Click to continue</div>
    </div>
  );
}

export default DialogueBox;