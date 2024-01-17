import { createContext, useContext } from 'react';

const GameContext = createContext({
  totalGames: 0,
  wins: 0,
  loses: 0,

  countWins: () => {},
  countTotalGames: () => {},
  countLoses: () => {}, 
});

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = GameContext.Provider;