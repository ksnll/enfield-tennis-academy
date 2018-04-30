import { expect } from 'chai';
import * as _ from 'lodash';

import * as types from './types';
import reducer from './reducers';
import { playerScoredMatch } from './actions';

describe('Reducers', () => {
  const playersList = Object.values(types.PLAYERS);
  const initScores = score => _.zipObject(playersList, score);

  it('test initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      currentPoints: initScores([0, 0]),
      currentGames: initScores([0, 0]),
      currentSets: initScores([0, 0]),
      matchOver: false,
      lastMessage: '',
    });
  });

  it('test winning of the match', () => {
    const action = playerScoredMatch(playersList[0]);
    expect(reducer(undefined, action)).to.deep.include({ matchOver: true });
  });
});
