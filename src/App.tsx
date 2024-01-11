import HomePage from "./components/HomePage";
import { createContext, useEffect, useState } from "react";
import InfoModal from "./components/InfoModal";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";

export const AppContext: any = createContext({});
const BoardDefault: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function App() {
  const [isInfoModalOpen, setInfoModal] = useState(false);
  const [solution, setSolution] = useState(null);
  const [Board, setBoard] = useState<string[][]>(BoardDefault);
  const [Cursor, setCursor] = useState({ y: 0, x: 0 });

  const onTap = (KeyVal: string) => {
    if (Cursor.x > 4) return;
    const newBoard = [...Board];
    newBoard[Cursor.y][Cursor.x] = KeyVal;
    setBoard(newBoard);
    setCursor({ ...Cursor, x: Cursor.x + 1 });
  };

  const onDelete = () => {
    if (Cursor.x === 0) return;
    const newBoard = [...Board];
    newBoard[Cursor.y][Cursor.x - 1] = "";
    setBoard(newBoard);
    setCursor({ ...Cursor, x: Cursor.x - 1 });
  };

  const onEnter = () => {
    if (Cursor.x !== 5) return;
    setCursor({ y: Cursor.y + 1, x: 0 });
  };

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
    <AppContext.Provider
      value={{
        isInfoModalOpen,
        setInfoModal,
        solution,
        Board,
        setBoard,
        onTap,
        onDelete,
        onEnter,
      }}
    >
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
