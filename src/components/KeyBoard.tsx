import React, { useCallback, useContext, useEffect } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function KeyBoard() {
  const line1: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const line2: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const line3: string[] = ["z", "x", "c", "v", "b", "n", "m"];
  const { onEnter, onDelete, onTap }: any = useContext(AppContext);

  const handleKeyup = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else if (/^[A-Za-z]$/.test(event.key)) {
        onTap(event.key);
      }
    },
    [onEnter, onDelete, onTap]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return (
    <div
      className="w-full max-w-[700px] h-[300px] mt-16 uppercase font-bold"
      onKeyUp={handleKeyup}
    >
      <div className="flex  m-1 justify-center">
        {line1.map((key: string, index: number) => {
          return <Key KeyVal={key} key={index} />;
        })}
      </div>
      <div className="flex  m-1 justify-center">
        {line2.map((key: string, index: number) => {
          return <Key KeyVal={key} key={index} />;
        })}
      </div>
      <div className="flex  m-1 justify-center">
        <Key KeyVal={"Enter"}>Enter</Key>
        {line3.map((key: string, index: number) => {
          return <Key KeyVal={key} key={index} />;
        })}
        <Key KeyVal={"Delete"}>Delete</Key>
      </div>
    </div>
  );
}

export default KeyBoard;
