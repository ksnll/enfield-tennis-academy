import * as React from 'react';
import PropTypes from 'prop-types';
import { PLAYERS } from '../game/types';
import './Toolbar.css';

const Toolbar = ({ matchOver, playerScored, resetGame }) => (
  <div className="Toolbar">
    <div className="Toolbar__score">
      {Object.values(PLAYERS).map(player =>
      (
        <button disabled={matchOver} onClick={() => playerScored(player)} key={player}>
          {player} Scored
        </button>))}
    </div>
    <div className="Toolbar__reset">
      <button onClick={() => resetGame()}>Reset Game</button>
    </div>
  </div>
);

Toolbar.propTypes = {
  playerScored: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  matchOver: PropTypes.bool.isRequired,
};
export default Toolbar;
