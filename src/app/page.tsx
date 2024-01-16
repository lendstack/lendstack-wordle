"use client";
import { useEffect } from "react";
import Game from "./_game";
import Keyboard from "./_keyboard";
import Swal2 from "sweetalert2";
import { getLocalStorage } from "@/utils/local";
import AlertRools from "@/components/AlertRools";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(Swal2);

export default function Home() {
  useEffect(() => {
    const { word } = getLocalStorage();
    !word && Swal.fire({
      title: <AlertRools />,
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
