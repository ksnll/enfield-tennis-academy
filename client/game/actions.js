import * as types from './types';

// action creators
const resetMatch = () => ({
  type: types.RESET_MATCH,
});

const playerScored = player => ({
  type: types.PLAYER_SCORED,
  player,
});

const playerScoredGame = player => ({
  type: types.PLAYER_SCORED_GAME,
  player,
});

const playerScoredSet = player => ({
  type: types.PLAYER_SCORED_SET,
  player,
});

const playerScoredMatch = player => ({
  type: types.PLAYER_SCORED_MATCH,
  player,
});

export {
  resetMatch,
  playerScored,
  playerScoredGame,
  playerScoredSet,
  playerScoredMatch,
};

