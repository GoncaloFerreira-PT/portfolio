import React from 'react';
import { Link } from 'react-router-dom';
import './Sudoku.css';

const Sudoku = () => {
  return (
    <div className="sudoku-container">
      <div className="sudoku-header">
        <h1>Sudoku Game</h1>
        <Link to="/" className="back-link">← Back to Portfolio</Link>
      </div>
      <div className="game-wrapper">
        <iframe
          src="/sudoku/Sudoku.html"
          title="Sudoku Game"
          className="game-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Sudoku;