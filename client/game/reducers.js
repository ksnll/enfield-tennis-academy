import * as _ from 'lodash';
import * as types from './types';
import { nextGames, nextPoints, nextSets } from './operations';

const playersList = Object.values(types.PLAYERS);

const initScores = value => _.zipObject(playersList, _.map(playersList, () => value));

const initialState = {
  currentPoints: initScores(0),
  currentGames: initScores(0),
  currentSets: initScores(0),
  matchOver: false,
  lastMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.RESET_MATCH:
      return initialState;

    case types.PLAYER_SCORED:
      return {
        ...state,
        currentPoints: nextPoints(state.currentPoints, action.player),
      };

    case types.PLAYER_SCORED_GAME:
      return {
        ...state,
        currentPoints: initScores(0),
        currentGames: nextGames(state.currentGames, action.player),
      };

    case types.PLAYER_SCORED_SET:
      return {
        ...state,
        currentPoints: initScores(0),
        currentGames: initScores(0),
        currentSets: nextSets(state.currentSets, action.player),
      };

    case types.PLAYER_SCORED_MATCH:
      return {
        ...state,
        matchOver: true,
        lastMessage: `${action.player} Won!`,
      };

    default:
      return state;
  }
};

export default reducer;
