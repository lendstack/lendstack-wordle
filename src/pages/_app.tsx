import React, { useState, useEffect} from 'react';
import "./App.css"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import { boardDefault } from './Words';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className='App' >
      <nav>
        <h1>Wordle Game</h1>
      </nav>
      <AppContext.Provider value={ {board, setBoard }}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
