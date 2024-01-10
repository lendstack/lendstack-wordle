import { useContext } from "react";
import { BoardContext } from "../contexts/boardContext";

export const useBoard = () => useContext(BoardContext); 