import * as types from './types';

const playersList = Object.values(types.PLAYERS);

const playerIsValid = player => playersList.includes(player);
const getOpponent = player => playersList.filter(el => el !== player).shift();

export const getPlayersPoints = (currentPoints, player) => {
  if (!playerIsValid(player)) throw new Error('Player not found');

  const opponent = getOpponent(player);
  const opponentPoints = currentPoints[opponent];
  const playerPoints = currentPoints[player];
  return { playerPoints, opponentPoints, opponent };
};

export const nextPoints = (currentPoints, playerScored) => {
  const { playerPoints, opponentPoints, opponent } = getPlayersPoints(currentPoints, playerScored);

  // go back to ADV
  if (opponentPoints === 4 && playerPoints === 3) {
    return { ...currentPoints, [opponent]: 3 };
  }

  // Skip Adv, game is won.
  if (playerPoints === 3 && opponentPoints !== 3) {
    return { ...currentPoints, [playerScored]: 5 };
  }
  return { ...currentPoints, [playerScored]: playerPoints + 1 };

};

export const displayPoints = (currentPoints, player) => {
  const { playerPoints, opponentPoints } = getPlayersPoints(currentPoints, player);
  if (playerPoints === 3 && opponentPoints === 3) { return 'Tie'; }
  if (playerPoints === 3 && opponentPoints === 4) { return '-'; }
  return types.VALID_POINTS[playerPoints];
};

export const nextGames = (currentGames, playerScored) => {
  if (!playerIsValid(playerScored)) throw new Error('Player not found');
  return { ...currentGames, [playerScored]: currentGames[playerScored] + 1 };
};

export const nextSets = (currentSets, playerScored) => {
  if (!playerIsValid(playerScored)) throw new Error('Player not found');
  return { ...currentSets, [playerScored]: currentSets[playerScored] + 1 };
};
