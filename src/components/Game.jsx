import React from 'react';
import DialogueBox from './DialogueBox';
import ChoiceBox from './ChoiceBox';
import PictureDisplay from './PictureDisplay';
import TitleDisplay from './TitleDisplay';

function Game({
  background,
  picture,
  title,
  dialogue,
  narration,
  choices,
  onNext,
  onSelectChoice,
}) {
  return (
    <div className="game-container">
      <div
        className="background-display"
        style={{
          backgroundImage: background ? `url(${background})` : 'none',
        }}
      />

      <PictureDisplay description={picture} />
      <TitleDisplay text={title} onNext={onNext} />

      <ChoiceBox options={choices} onSelect={onSelectChoice} />

      <DialogueBox
        dialogue={dialogue}
        narration={narration}
        onNext={onNext}
      />
    </div>
  );
}

export default Game;