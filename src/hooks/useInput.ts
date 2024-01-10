import { useContext } from "react";
import { InputContext } from "../contexts/inputContext";

export const useInput = () => useContext(InputContext);