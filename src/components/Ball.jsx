// Ball.js
import React, { useState, useEffect } from 'react';
import '../styles/Ball.css';

const Ball = ({ color, onClick, position }) => {
  const top = Math.random() * 50

  return (
    <div
      className={`ball ${color}`}
      style={{ left: `${position}%`, top: `${top}%` }}
      onClick={onClick}
    />
  );
};

export default Ball;
