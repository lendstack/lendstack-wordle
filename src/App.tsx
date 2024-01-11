import HomePage from "./components/HomePage";
import { createContext, useEffect, useState } from "react";
import InfoModal from "./components/InfoModal";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";

export const AppContext: any = createContext({});

function App() {
  const [isInfoModalOpen, setInfoModal] = useState(false);
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <AppContext.Provider value={{ isInfoModalOpen, setInfoModal, solution }}>
      <div className="w-screen h-screen dark">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/game" Component={GamePage} />
        </Routes>
        <InfoModal></InfoModal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
