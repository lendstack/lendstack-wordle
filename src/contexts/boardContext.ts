import { createContext } from "react";

export interface Board {
    word: string;
    guesses: string[];
    ongoing: boolean;
    gameResult: string[];
}

type DispatchBoard = React.Dispatch<React.SetStateAction<Board>>;

interface BoardContextType {
  board: Board;
  setBoard: DispatchBoard;
}

export const BoardContext = createContext<BoardContextType>({} as BoardContextType);
