import { connect } from 'react-redux';

import * as actions from '../game/actions';
import Scoreboard from './Scoreboard';

const ScoreboardContainer = connect(state => state, {
  resetGame: actions.resetMatch,
  playerScored: actions.playerScored,
})(Scoreboard);

export default ScoreboardContainer;
