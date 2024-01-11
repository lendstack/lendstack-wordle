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
  const [retry, setretry] = useState(6);
  const [win, setwin] = useState(false);
  const [lose, setlose] = useState(false);

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
    let currentWord: string = "";
    for (let i = 0; i < 5; i++) {
      currentWord += Board[Cursor.y][i];
    }
    setCursor({ y: Cursor.y + 1, x: 0 });
    setretry(retry - 1);
    if (currentWord.toLocaleLowerCase() === solution) setwin(true);
    if (currentWord.toLocaleLowerCase() !== solution && retry === 1)
      setlose(true);
  };

  useEffect(() => {
    fetch("http://localhost:3001/words")
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
        Cursor,
        win,
        setwin,
        lose,
        setlose,
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
