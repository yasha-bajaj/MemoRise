// src/pages/ScoreEntry.js
import React, { useState } from 'react';

function ScoreEntry() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [game, setGame] = useState(''); // New state for selected game
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update entries with new score and game
    const newEntry = { name, game, score };
    setEntries([...entries, newEntry]);

    // Clear the form fields
    setName('');
    setScore('');
    setGame(''); // Clear game selection
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'orange' }}>Score Entry</h1>
      
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#a9a9a9', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
        

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="game" style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Game</label>
          <select
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          >
            <option value="" disabled>Select a game</option>
            <option value="SimonSays">Simon Says</option>
            <option value="Quiz">Quiz</option>
            <option value="TenziesGame">Tenzies Game</option>
            <option value="flipGame">Flip Game</option>
            <option value="memorygame">Memory Game</option>
            <option value="tetriesgame">Tetris Game</option>
            <option value="puzzlegame">Puzzle Game</option>
            <option value="wordguess">Word Guess</option>
          </select>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="score" style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Score</label>
          <input
            type="number"
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>

        <button type="submit" style={{ backgroundColor: 'orange', color: '#fff', fontWeight: 'bold', padding: '10px 16px', border: 'none', borderRadius: '14px', cursor: 'pointer', marginTop: '12px' }}>
          Submit
        </button>
      </form>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'orange' }}>Score Entries</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {entries.map((entry, index) => (
          <li key={index} style={{ marginBottom: '8px', color: 'orange' }}>
            {entry.name} - {entry.game}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreEntry;
