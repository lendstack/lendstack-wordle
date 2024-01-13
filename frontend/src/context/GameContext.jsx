import { createContext, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // ... (existing code)

  const handleKeyPress = (key) => {
    // Do something with the key press, for example, log it
    console.log(`Key pressed: ${key}`);
    // You can also add more logic to handle the key press in the context
  };

  const contextValue = {
    // ... (existing values)
    handleKeyPress,
  };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};