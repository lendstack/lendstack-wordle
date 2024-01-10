import HomePage from "./components/HomePage";
import { createContext, useState } from "react";
import InfoModal from "./components/InfoModal";

export const AppContext: any = createContext({});

function App() {
  const [isInfoModalOpen, setInfoModal] = useState(false);

  return (
    <AppContext.Provider value={{ isInfoModalOpen, setInfoModal }}>
      <div className="w-screen h-screen dark">
        <HomePage></HomePage>
        <InfoModal></InfoModal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
