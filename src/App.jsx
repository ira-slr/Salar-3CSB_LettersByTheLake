import React, { useState, useEffect } from 'react';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import { script } from './script';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [eventQueue, setEventQueue] = useState(script);
  const [eventIndex, setEventIndex] = useState(0);

  const [currentBackground, setCurrentBackground] = useState('');
  const [currentPicture, setCurrentPicture] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentDialogue, setCurrentDialogue] = useState(null);
  const [currentNarration, setCurrentNarration] = useState(null);
  const [currentChoices, setCurrentChoices] = useState(null);

  const currentEvent = eventQueue[eventIndex];

  useEffect(() => {
    if (!currentEvent) {
      setGameState('finished');
      return;
    }

    setCurrentPicture(null);
    setCurrentTitle(null);

    switch (currentEvent.type) {
      case 'background':
        setCurrentBackground(currentEvent.description);
        advance();
        break;
      case 'narration':
        setCurrentNarration(currentEvent.text);
        setCurrentDialogue(null);
        break;
      case 'dialogue':
        setCurrentDialogue(currentEvent);
        setCurrentNarration(null);
        break;
      case 'picture':
        setCurrentPicture(currentEvent.description);
        advance();
        break;
      case 'title':
        setCurrentTitle(currentEvent.text);
        setCurrentDialogue(null);
        setCurrentNarration(null);
        break;
      case 'choice':
        setCurrentChoices(currentEvent.options);
        setCurrentDialogue(null);
        setCurrentNarration(null);
        break;
      case 'end':
        setGameState('finished');
        break;
    }
  }, [currentEvent]);

  const advance = () => {
    setEventIndex((prevIndex) => prevIndex + 1);
  };

  const handleNextClick = () => {
    if (currentChoices) return;
    
    if (currentTitle) {
      advance();
      return;
    }

    if (currentDialogue || currentNarration) {
      advance();
    }
  };

  const handleChoiceSelect = (selectedOption) => {
    const followUpEvents = selectedOption.followUp;
    setCurrentChoices(null);

    if (selectedOption.isBranch) {
      setEventQueue(followUpEvents);
      setEventIndex(0);

    } else {
      setEventQueue((prevQueue) => {
        const before = prevQueue.slice(0, eventIndex);
        const after = prevQueue.slice(eventIndex + 1);
        return [...before, ...followUpEvents, ...after];
      });
    }
  };

  const handleStartGame = () => {
    setGameState('playing');
    const firstEvent = eventQueue[0];
    if (firstEvent.type === 'background') {
      setCurrentBackground(firstEvent.description);
      setEventIndex(1);
    }
  };

  const handleRestart = () => {
    setGameState('menu');
    setEventIndex(0);
    setEventQueue(script);
    setCurrentBackground('');
    setCurrentPicture(null);
    setCurrentTitle(null);
    setCurrentDialogue(null);
    setCurrentNarration(null);
    setCurrentChoices(null);
  };

  if (gameState === 'menu') {
    return <MainMenu onStartGame={handleStartGame} />;
  }

  if (gameState === 'finished') {
    return (
      <div className="game-container">
        <div className="finished-screen">
          <h1>The End</h1>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <Game
      background={currentBackground}
      picture={currentPicture}
      title={currentTitle}
      dialogue={currentDialogue}
      narration={currentNarration}
      choices={currentChoices}
      onNext={handleNextClick}
      onSelectChoice={handleChoiceSelect}
    />
  );
}

export default App;