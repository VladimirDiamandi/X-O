/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { GameBox } from './GameBox';
import { exIcon, zeroIcon } from './svgIcons';
import { Winner } from './Winner';

export const GameGrid = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [isWinner, setIsWinner] = useState(false);
  const [gameMap, setGameMap] = useState(Array(9).fill(''));
  const [currentTurn, setCurrentTurn] = useState('x');
  const currentTurnIcon = currentTurn === 'x' ? exIcon : zeroIcon;
  const winnerIcon = currentTurn === '0' ? exIcon : zeroIcon;

  const calcIsWinner = (game) => {
    for (let i = 0; i < winConditions.length; i++) {
      if (game[winConditions[i][0]] === game[winConditions[i][1]]
        && game[winConditions[i][1]] === game[winConditions[i][2]]) {
        if (game[winConditions[i][0]] !== '') {
          return true;
        }
      }
    }
    return false;
  };

  const init = () => {
    setGameMap(Array(9).fill(''));
    setIsWinner(false);
    setCurrentTurn('x');
  };

  const handleTurn = (id) => {
    setGameMap((prevState) => {
      const newState = prevState;
      newState[id] = currentTurn;

      if (calcIsWinner(newState)) {
        setIsWinner(true);
      }
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
        {isWinner && <Winner icon={winnerIcon} onClick={init} />}
      </h2>
      <div className="game__grid">
        {gameMap.map((boxValue, id) => (
          <GameBox key={id} id={id} value={boxValue} onClick={handleTurn} />
        ))}
      </div>
    </>
  );
};
