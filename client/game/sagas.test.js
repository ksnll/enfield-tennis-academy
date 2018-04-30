import { expect } from 'chai';
import { expectSaga } from 'redux-saga-test-plan';

import * as types from './types';
import rootSaga from './sagas';
import reducer from './reducers';

describe('Sagas', () => {
  const playersList = Object.values(types.PLAYERS);
  const scoredAction = { type: types.PLAYER_SCORED, player: playersList[0] };
  const scoredGameAction = { type: types.PLAYER_SCORED_GAME, player: playersList[0] };
  const scoredSetAction = { type: types.PLAYER_SCORED_SET, player: playersList[0] };

  it('test dispatch of game won', () =>
    expectSaga(rootSaga).withReducer(reducer)
      .put({
        type: types.PLAYER_SCORED_GAME,
        player: playersList[0],
      })

      .dispatch(scoredAction)
      .dispatch(scoredAction)
      .dispatch(scoredAction)
      .dispatch(scoredAction)
      .run());

  it('test dispatch of set won', () =>
    expectSaga(rootSaga).withReducer(reducer)
      .put({
        type: types.PLAYER_SCORED_SET,
        player: playersList[0],
      })

      .dispatch(scoredGameAction)
      .dispatch(scoredGameAction)
      .dispatch(scoredGameAction)
      .dispatch(scoredGameAction)
      .dispatch(scoredGameAction)
      .dispatch(scoredGameAction)
      .run());

  it('test dispatch of match won', () =>
    expectSaga(rootSaga).withReducer(reducer)
      .put({
        type: types.PLAYER_SCORED_MATCH,
        player: playersList[0],
      })

      .dispatch(scoredSetAction)
      .dispatch(scoredSetAction)
      .run());
});
