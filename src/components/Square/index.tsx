import { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

export default function Square(props: any) {
    const [cases, setCases] = useState("text-black dark:text-black border-2 border-black dark:bg-slate-200 rounded-lg");
    
    useEffect(() => {
        setTimeout(() => {
          if (props.state === "C")
            setCases("bg-correct bg-green-600 dark:text-slate-800");
          if (props.state === "E")
            setCases("bg-exist bg-yellow-400 dark:text-slate-800");
          if (props.state === "W")
            setCases("bg-wrong bg-gray-300 dark:bg-gray-400 dark:text-slate-800");
        }, 125 * props.pos);
      }, [props.state]);
    return (
        <div
        className={
            "h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-lg " + cases
        }
        >
        {props.value === "REMOVE" ? <BackspaceIcon /> : props.value}
        </div>
    );
}