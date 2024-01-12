import * as React from "react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { DataDTO, DataScoreDTO } from "../dto/dataDto";
import WordGenerator from "../utils/wordGenerator";
import ValideDataGame from "../utils/valideDataGame";
import AlertTutorial from "../components/AlertTuto";
import { getScoreByUserid, getSession } from "../utils/supabase";
import { decryptData, encryptData } from "../utils/crypto";

interface ContextProps {
  data: DataDTO;
  setData: Dispatch<SetStateAction<DataDTO>>;

  openAlertTuto: boolean;
  setOpenAlertTuto: Dispatch<SetStateAction<boolean>>;

  lengthWord: number;
}

const GlobalContext = createContext<ContextProps>({
  data: {
    isAuthenticated: false,
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
    isAuthenticated: false,
    isGameOver: false,
    gridType: gridType,
    randomWord: "",
    guesses: Array.from({ length: gridType }, () => "*".repeat(lengthWord)),
    numAttempts: 0,
    played: 0,
    numWins: 0,
  });

  const [openAlertTuto, setOpenAlertTuto] = useState<boolean>(false);

  useEffect(() => {
    const getWold = async () => {
      const storedGameData = await decryptData();
      let isValide: DataDTO | null = null;
      if (storedGameData) {
        try {
          isValide = await ValideDataGame(data, storedGameData, lengthWord);
          console.log(isValide);
        } catch (error) {}
      }
      if (isValide === null) {
        const tmp = await WordGenerator(lengthWord);
        if (tmp) {
          setData((preValue) => {
            let newData = { ...preValue };
            newData.randomWord = tmp.toUpperCase();
            encryptData(newData);
            return newData;
          });
        }
      } else {
        setData(isValide);
      }
    };
    getWold();
  }, []);

  const getDataFromSupa = async () => {
    const session = await getSession();
    if (session) {
      const score: DataScoreDTO[] | null = await getScoreByUserid();
      if (score && score.length !== 0 && score[0]) {
        setData((preValue) => {
          let newData = { ...preValue };
          newData.played = score[0]?.played | 0;
          newData.numWins = score[0]?.numWins | 0;
          encryptData(newData);
          return newData;
        });
      }
    }
  };
  useEffect(() => {
    getDataFromSupa();
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
