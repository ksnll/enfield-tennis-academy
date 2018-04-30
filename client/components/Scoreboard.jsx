import * as React from 'react';
import PropTypes from 'prop-types';

import { PLAYERS } from '../game/types';
import PlayerScore from './PlayerScore';
import Toolbar from './Toolbar';

import './Scoreboard.css';

const Scoreboard = ({
  currentPoints, currentSets, currentGames, resetGame, playerScored, matchOver, lastMessage,
}) => (
  <div className="Scoreboard">
    <h1 className="Scoreboard__title">Enfield Tennis Scoreboard</h1>
    <div className="Scoreboard__message">{lastMessage}</div>
    <div className="Scoreboard__scores">
      {Object.values(PLAYERS).map(player =>
        (<PlayerScore
          key={player}
          currentPoints={currentPoints}
          currentSets={currentSets}
          currentGames={currentGames}
          player={player}
        />))}
    </div>
    <Toolbar matchOver={matchOver} playerScored={playerScored} resetGame={resetGame} />
  </div>
);


Scoreboard.propTypes = {
  currentPoints: PropTypes.shape().isRequired,
  currentSets: PropTypes.shape().isRequired,
  currentGames: PropTypes.shape().isRequired,
  playerScored: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  matchOver: PropTypes.bool.isRequired,
  lastMessage: PropTypes.string.isRequired,
};

export default Scoreboard;
