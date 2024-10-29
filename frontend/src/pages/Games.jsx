// src/pages/Games.js
import React from 'react';

function Games() {
  return (
    <div className="games-container text-yellow-400 text-center">
      <h1 className="text-4xl font-bold text-yellow-400 mx-5 mt-10 mb-10">Choose a Game</h1>
      <ul className="game-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <li className="game-item">
          <a href="https://gamenest-rose.vercel.app/SimonSays" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/simonsays.jpg" alt="Simon Says" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Simon Says
          </a>
        </li>
        <li className="game-item">
          <a href="https://game-hub-seven-steel-93.vercel.app/Quiz" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/quiz.jpg" alt="Quiz" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Quiz
          </a>
        </li>
        <li className="game-item">
          <a href="https://gamenest-rose.vercel.app/TenziesGame" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/tenzi.jpg" alt="Tenzies Game" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Tenzies Game
          </a>
        </li>
        <li className="game-item">
          <a href="https://game-hub-seven-steel-93.vercel.app/memorygame" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/memory.jpg" alt="Flip Game" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Flip Game
          </a>
        </li>
    
        <li className="game-item">
          <a href="https://gamenest-rose.vercel.app/tetriesgame" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/tetris.jpg" alt="Tetris Game" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Tetris Game
          </a>
        </li>
        <li className="game-item">
          <a href="https://game-hub-seven-steel-93.vercel.app/puzzlegame" target="_blank" rel="noopener noreferrer" className="game-link">
            <img src="/puzzle.jpg" alt="Puzzle Game" className="game-image" style={{ width: '450px', height: '450px', objectFit: 'cover', borderRadius: '8px' }} />
            Puzzle Game
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Games;
