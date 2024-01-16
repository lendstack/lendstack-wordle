import { createContext, useContext } from 'react';

const GameContext = createContext({
  totalGames: 0,
  wins: 0,
  loses: 0,

  countWins: (prev) => {},
  countTotalGames: (prev) => {},
  countLoses: (prev => {}), 
});

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = GameContext.Provider;