import React from 'react';

// 1. Accept 'background' prop
function MainMenu({ onStartGame, background }) {
  return (
    // 2. Add a wrapper div to hold the background image
    <div
      className="menu-background"
      style={{ backgroundImage: background ? `url(${background})` : 'none' }}
    >
      <div className="main-menu">
        <h1>Letters by the Lake</h1>
        <button onClick={onStartGame}>Start Game</button>
      </div>
    </div>
  );
}

export default MainMenu;