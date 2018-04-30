import { expect } from 'chai';

import * as actions from '../game/actions';
import * as types from './types';

describe('Action creators', () => {
  const playersList = Object.values(types.PLAYERS);

  it('resetMatch should return RESET_MATCH', () => {
    expect(actions.resetMatch()).to.deep.equal({ type: types.RESET_MATCH });
  });

  it('playerScoredGame should return PLAYER_SCORED_GAME', () => {
    playersList.map(player =>
      expect(actions.playerScoredGame(player)).to.deep.equal({
        type: types.PLAYER_SCORED_GAME, player,
      }));
  });

  it('playerScoredSet should return PLAYER_SCORED_SET', () => {
    playersList.map(player =>
      expect(actions.playerScoredSet(player)).to.deep.equal({
        type: types.PLAYER_SCORED_SET, player,
      }));
  });

  it('playerScoredMatch should return PLAYER_SCORED_MATCH', () => {
    playersList.map(player =>
      expect(actions.playerScoredMatch(player)).to.deep.equal({
        type: types.PLAYER_SCORED_MATCH, player,
      }));
  });
});
