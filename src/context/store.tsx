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

interface ContextProps {
  data: DataDTO;
  setData: Dispatch<SetStateAction<DataDTO>>;
}

const GlobalContext = createContext<ContextProps>({
  data: { world: "", geusses: [], nmbAttempt: 0 },
  setData: () => {},
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
      const tmp = await WordGenerator();
      if (tmp) {
        setData((preValue) => {
          let newData = preValue;
          newData.world = tmp.toUpperCase();
          console.log("newData.world=", newData.world);
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
