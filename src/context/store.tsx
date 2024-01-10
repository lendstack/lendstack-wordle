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

interface ContextProps {
  data: DataDTO;
  setData: Dispatch<SetStateAction<DataDTO>>;
}

const GlobalContext = createContext<ContextProps>({
  data: { world: "", geusses: [], nmbAttempt: 0 },
  setData: () => { },
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<DataDTO>({
    world: "",
    geusses: ["*****", "*****", "*****", "*****", "*****"],
    nmbAttempt: 0,
  });

  useEffect(() => {
    const getWold = async () => {

      // const storedGameData = localStorage.getItem('myGameData');
      // if (storedGameData) {
      //   const tmpData = JSON.parse(storedGameData);
      //   const isValide: DataDTO | null = await ValideDataGame(data, tmpData);
      //   console.log("isVlaide--->", isValide);

      // }

      const tmp = await WordGenerator();
      if (true) {
        setData((preValue) => {
          let newData = preValue;
          // newData.world = tmp.toUpperCase();
          newData.world = "FIFAL";
          console.log("newData.world=", newData);
          localStorage.setItem('myGameData', JSON.stringify(newData));
          return newData;
        });
      }
    };
    getWold();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
