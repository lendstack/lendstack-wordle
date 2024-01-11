import * as React from "react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { DataDTO } from "../dto/dataDto";
import WordGenerator from "../utils/wordGenerator";
import ValideDataGame from "../utils/valideDataGame";
import AlertTutorial from "../components/AlertTuto";

interface ContextProps {
  data: DataDTO;
  setData: Dispatch<SetStateAction<DataDTO>>;

  openAlertTuto: boolean;
  setOpenAlertTuto: Dispatch<SetStateAction<boolean>>;

  lengthWord: number;
}

const GlobalContext = createContext<ContextProps>({
  data: {
    isGameOver: false,
    gridType: 6,
    randomWord: "",
    guesses: [],
    numAttempts: 0,
    played: 0,
    numWins: 0,
  },
  setData: () => {},

  openAlertTuto: false,
  setOpenAlertTuto: () => {},

  lengthWord: 0,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lengthWord: number = 5;
  const gridType: number = 5;

  const [data, setData] = useState<DataDTO>({
    isGameOver: false,
    gridType: gridType,
    randomWord: "",
    guesses: Array.from({ length: gridType }, () => "*".repeat(lengthWord)),
    //  ["*".repeat(lengthWord)],
    numAttempts: 0,
    played: 0,
    numWins: 0,
  });

  const [openAlertTuto, setOpenAlertTuto] = useState<boolean>(false);

  useEffect(() => {
    const getWold = async () => {
      const storedGameData = localStorage.getItem("myGameData");
      let isValide: DataDTO | null = null;
      if (storedGameData) {
        try {
          const tmpData = JSON.parse(storedGameData);
          isValide = await ValideDataGame(data, tmpData, lengthWord);
          console.log(isValide);
        } catch (error) {}
      }
      if (isValide === null) {
        const tmp = await WordGenerator(lengthWord);
        if (tmp) {
          setData((preValue) => {
            let newData = { ...preValue };
            newData.randomWord = tmp.toUpperCase();
            localStorage.setItem("myGameData", JSON.stringify(newData));
            return newData;
          });
        }
      } else {
        setData(isValide);
      }
    };
    getWold();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        openAlertTuto,
        setOpenAlertTuto,
        lengthWord,
      }}
    >
      {children}
      <AlertTutorial />
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
