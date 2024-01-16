"use client";

import { useContext, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaListUl } from "react-icons/fa";
import AlertRools from "./AlertRools";
import { UtilityContext } from "@/context/UtilityContext";

const Swal = withReactContent(Swal2);

export default function NavBar() {
  const { resetGame } = useContext(UtilityContext)!;
  function showRules() {
    Swal.fire({
      title: <AlertRools />,
      width: 500,
      padding: "2rem .5rem",
      background: "#FEE2E2",
      confirmButtonText: "Reset",
      backdrop: `
      rgba(0,0,123,0.4)
      url("/gifs/intro.gif")
      left top
      no-repeat
    `,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) resetGame();
    });
  }
  return (
    <nav className="fixed flex justify-center items-center h-20 mx-2">
      <button className="h-7" onClick={showRules}>
        <FaListUl size={"100%"} />
      </button>
    </nav>
  );
}
