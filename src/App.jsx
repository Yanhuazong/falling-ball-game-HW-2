// App.js
import React, { useState, useEffect } from 'react';
import Ball from './components/Ball.jsx';
import './App.css';

const App = () => {
const balls= [
    { id: 1, color: 'red', position: 10 },
    { id: 2, color: 'blue', position: 30 },
    { id: 3, color: 'red', position: 50 },
    { id: 4, color: 'blue', position: 70 },
  ];

  return (
    <div className="App">

      <div className="game-area">
        {balls.map((ball) => (
          <Ball
            key={ball.id}
            color={ball.color}
            position={ball.position}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
