/* eslint-disable react/prop-types */
import React from 'react';

export const Winner = ({ icon, onClick }) => (
  <div className="game__winner-wrapper">
    <div className="game__winner-container">
      <span>The winner is:</span>
      <div className="game__winner-icon">
        {icon}
      </div>
      <button className="game__button" type="button" onClick={onClick}>Try again</button>
    </div>
  </div>
);
