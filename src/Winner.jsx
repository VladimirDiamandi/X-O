/* eslint-disable react/prop-types */
import React from 'react';

export const Winner = ({ icon, onClick, isDraw }) => (
  <div className="game__winner-wrapper">
    <div className="game__winner-container">
      {!isDraw && (
      <>
        <span>The winner is:</span>
        <div className="game__winner-icon">
          {icon}
        </div>
      </>
      )}
      {isDraw && <div>Draw</div>}
      <button className="game__button" type="button" onClick={onClick}>Try again</button>
    </div>
  </div>
);
