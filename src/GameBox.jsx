/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { exIcon, zeroIcon } from './svgIcons';

export const GameBox = ({ id, value, onClick }) => {
  const isDisabled = value !== '';
  const icon = value === '' ? '' : value === 'x' ? exIcon : zeroIcon;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      type="button"
      className="game__box"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};
