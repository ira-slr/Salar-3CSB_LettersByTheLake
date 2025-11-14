import React from 'react';

function MainMenu({ onStartGame }) {
  return (
    <div className="main-menu">
      <h1>Letters by the Lake</h1>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
}

export default MainMenu;