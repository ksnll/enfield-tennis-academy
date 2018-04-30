import { expect } from 'chai';
import * as _ from 'lodash';

import * as types from './types';
import { displayPoints, nextGames, nextPoints, nextSets } from './operations';

describe('Operations', () => {
  const playersList = Object.values(types.PLAYERS);
  const initScore = score => _.zipObject(playersList, score);

  it('calculate nextPoints', () => {
    expect(nextPoints(initScore([0, 0]), playersList[0])).to.deep.equal({
      [playersList[0]]: 1,
      [playersList[1]]: 0,
    });
  });

  it('calculate nextPoints when tied', () => {
    expect(nextPoints(initScore([3, 4]), playersList[0])).to.deep.equal({
      [playersList[0]]: 3,
      [playersList[1]]: 3,
    });
  });

  it('calculate nextPoints when match is won', () => {
    expect(nextPoints(initScore([4, 3]), playersList[0])).to.deep.equal({
      [playersList[0]]: 5,
      [playersList[1]]: 3,
    });
  });

  it('Non existing player should throw', () => {
    expect(() => nextPoints(initScore([4, 3]), 'abc')).to.throw();
  });

  it('calculate nextGames', () => {
    expect(nextGames(initScore([0, 0]), playersList[0])).to.deep.equal({
      [playersList[0]]: 1,
      [playersList[1]]: 0,
    });
  });

  it('calculate nextSets', () => {
    expect(nextSets(initScore([0, 0]), playersList[0])).to.deep.equal({
      [playersList[0]]: 1,
      [playersList[1]]: 0,
    });
  });

  it('display score', () => {
    const testDisplay = scores => displayPoints(initScore(scores), playersList[0]);
    expect(testDisplay([0, 0])).to.be.a('string');
    expect(testDisplay([0, 0])).to.equal('0');
    expect(testDisplay([3, 3])).to.equal('Tie');
    expect(testDisplay([4, 3])).to.equal('Adv');
    expect(testDisplay([5, 0])).to.equal('Win');
  });

});
