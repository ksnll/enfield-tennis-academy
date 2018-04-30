import * as React from 'react';
import PropTypes from 'prop-types';

import { displayPoints } from '../game/operations';
import { PLAYERS } from '../game/types';
import './PlayerScore.css';

const PlayerScore = ({
  currentPoints, currentGames, currentSets, player,
}) => (
  <div className="PlayerScore">
    <h2 className="PlayerScore__title">{player}</h2>
    <div className="PlayerScore__sets">Sets: {currentSets[player]}</div>
    <div className="PlayerScore__games">Games: {currentGames[player]}</div>
    <div className="PlayerScore__points">{displayPoints(currentPoints, player)}</div>
  </div>
);

PlayerScore.propTypes = {
  currentPoints: PropTypes.shape().isRequired,
  currentSets: PropTypes.shape().isRequired,
  currentGames: PropTypes.shape().isRequired,
  player: PropTypes.oneOf(Object.values(PLAYERS)).isRequired,
};

export default PlayerScore;
