"use client";
import { UtilityContext } from "@/context/UtilityContext";
import { useContext, useEffect, useState } from "react";
import KeyRow from "./keyRow";


export default function Keyboard() {
  const { exactMatch, partialMatch, noMatch, handleKeyPress, resetGame } =
    useContext(UtilityContext)!;
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="md:gap-[6px] flex flex-col gap-1 justify-center items-center">
      {keys.map((row, i) => (
        <KeyRow key={`1-${i}`} row={row} index={i} />
      ))}
    </div>
  );
}
