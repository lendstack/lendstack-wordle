import React from "react";
import Key from "./Key";

function KeyBoard() {
  const line1: string[] = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const line2: string[] = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const line3: string[] = ["z", "x", "c", "v", "b", "n", "m"];
  return (
    <div className="w-full max-w-[700px] h-[300px] mt-16 uppercase font-bold">
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

// width: 50px;
// height: 70px;
// margin: 5px;
// border-radius: 4px;
// display: grid;
// place-items: center;
// font-size: 20px;
// background-color: grey;
// color: white;
// font-family: Arial, Helvetica, sans-serif;
// cursor: pointer;

// flex: 33%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// margin: 5px;
