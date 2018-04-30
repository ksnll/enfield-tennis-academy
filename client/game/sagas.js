import { put, select, takeEvery } from 'redux-saga/effects';

import { PLAYER_SCORED, PLAYER_SCORED_GAME, PLAYER_SCORED_SET } from './types';
import { playerScoredGame, playerScoredMatch, playerScoredSet } from './actions';

export function* playerScoredSaga(action) {
  const currentPoints = yield select(state => state.currentPoints);
  if (Object.values(currentPoints).includes(5)) yield put(playerScoredGame(action.player));
}

export function* playerScoredGameSaga(action) {
  const currentGames = yield select(state => state.currentGames);
  if (Object.values(currentGames).includes(6)) yield put(playerScoredSet(action.player));
}

export function* playerScoredSetSaga(action) {
  const currentSets = yield select(state => state.currentSets);
  if (Object.values(currentSets).includes(2)) yield put(playerScoredMatch(action.player));
}

export default function* rootSaga() {
  yield takeEvery(PLAYER_SCORED, playerScoredSaga);
  yield takeEvery(PLAYER_SCORED_GAME, playerScoredGameSaga);
  yield takeEvery(PLAYER_SCORED_SET, playerScoredSetSaga);
}
