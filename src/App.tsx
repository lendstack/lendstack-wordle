import HomePage from "./components/HomePage";
import { createContext, useState } from "react";
import InfoModal from "./components/InfoModal";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";

export const AppContext: any = createContext({});

function App() {
  const [isInfoModalOpen, setInfoModal] = useState(false);

  return (
    <AppContext.Provider value={{ isInfoModalOpen, setInfoModal }}>
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
