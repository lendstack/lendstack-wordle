import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [matchesPlayed, setMatchesPlayed] = useState(0);
  const [refreshWord, setRefreshWord] = useState(false);
  
  useEffect(() => {
    // Load data from localStorage on component mount
    const storedWins = localStorage.getItem('wins');
    const storedLosses = localStorage.getItem('losses');
    const storedMatchesPlayed = localStorage.getItem('matchesPlayed');

    setWins(storedWins ? parseInt(storedWins, 10) : 0);
    setLosses(storedLosses ? parseInt(storedLosses, 10) : 0);
    setMatchesPlayed(storedMatchesPlayed ? parseInt(storedMatchesPlayed, 10) : 0);
  }, []);

  const resetGameStats = () => {
    setRefreshWord(true);
    setMatchesPlayed(matchesPlayed + 1);
  };

  const handleWin = () => {
    setWins(wins + 1);
    resetGameStats();
  };

  const handleLoss = () => {
    setLosses(losses + 1);
    resetGameStats();
  };

  useEffect(() => {
    // Save data to localStorage whenever wins, losses, or matchesPlayed change
    localStorage.setItem('wins', wins.toString());
    localStorage.setItem('losses', losses.toString());
    localStorage.setItem('matchesPlayed', matchesPlayed.toString());
  }, [wins, losses, matchesPlayed]);

  const contextValue = {
    wins,
    losses,
    matchesPlayed,
    refreshWord,
    setRefreshWord,
    handleWin,
    handleLoss,
  };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};