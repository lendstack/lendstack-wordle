"use client";
import Game from "./game";
import Keyboard from "./keyboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Game />
      <Keyboard />
    </main>
  );
}
