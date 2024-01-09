import useWordAnalyser from "~/lib/hooks/useWordAnalyser";
import { keyBoardRows } from "../../../constants";

const Keyboard: React.FC = ({}) => {

    const {analyseWord, handleSubmit} = useWordAnalyser ()
  return (
    <div className="grid-cols-20 grid w-full justify-center gap-1">
      {keyBoardRows?.map((item, index) => {
        return (
          <button
            onClick={()=> {
              if (item.char === 'Enter')
                handleSubmit ();
              else 
                analyseWord (item.char.toLowerCase ());
            }}
            className={`keyboard-btn
            ${item.char === ' ' ? 'opacity-0' : ''}
            ${
              item.char === "Enter" || item.char === "*"
                ? "col-span-3"
                : "col-span-2"
            }`}
            key={index}
          >
            {item?.char}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
