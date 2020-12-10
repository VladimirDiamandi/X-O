/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { GameBox } from './GameBox';
import { exIcon, zeroIcon } from './svgIcons';

export const GameGrid = () => {
  const [gameMap, setGameMap] = useState(Array(9).fill(''));
  const [currentTurn, setCurrentTurn] = useState('x');
  const currentTurnIcon = currentTurn === 'x' ? exIcon : zeroIcon;

  const handleTurn = (id) => {
    setGameMap((prevState) => {
      const newState = prevState;
      newState[id] = currentTurn;
      return [...newState];
    });
    setCurrentTurn((prevState) => {
      const newState = prevState === 'x' ? '0' : 'x';
      return newState;
    });
  };

  return (
    <>
      <h2>
        Current turn
        <div className="game__turn-icon">{currentTurnIcon}</div>
      </h2>
      <div className="game__grid">
        {gameMap.map((boxValue, id) => (
          <GameBox key={id} id={id} value={boxValue} onClick={handleTurn} />
        ))}
      </div>
    </>
  );
};
