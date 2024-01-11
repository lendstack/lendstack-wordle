"use client";
import { useEffect } from "react";
import Game from "./_game/game";
import Keyboard from "./keyboard";
import Swal from "sweetalert2";
import { getLocalStorage } from "@/utils/local";

export default function Home() {
  useEffect(() => {
    const { word } = getLocalStorage();
    !word &&
      Swal.fire({
        html: `<div'>
        <h1 class="text-3xl font-bold text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Welcome to Wordle.</h1>
        <h2 class="text-xl font-semibold mt-4 text-start">How To Play:</h2>
        <ul class="text-md font-medium flex flex-col items-start text-start list-disc list-inside ml-1 mt-2 gap-1">
        <li>Guess the Wordle in 6 tries.</li>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>The color of the tiles will change to show how close your guess was to the word.</li>
        </ul><div>`,
        width: 500,
        padding: "2rem .5rem",
        background: "#FEE2E2",
        confirmButtonText: "Play",
        backdrop: `
        rgba(0,0,123,0.4)
        url("/gifs/intro.gif")
        left top
        no-repeat
      `,
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
        Wordle
      </h1>
      <Game />
      <Keyboard />
    </main>
  );
}
