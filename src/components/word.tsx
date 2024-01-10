import { LetterState } from "../db/word-utils";

export function Word(props: { letter: string; state: LetterState }) {
  // console.log(props.state);

  function getStyle() {
    // console.log("LetterState ", props.state);
    if (props.state === LetterState.Default) {
      return `${
        props.letter !== " " ? "bg-white text-black" : "bg-[#18191E]"
      } `;
    } else if (props.state === LetterState.Miss) {
      return "bg-red-600 text-white";
    } else if (props.state === LetterState.Present) {
      return "bg-yellow-600  text-white";
    } else if (props.state === LetterState.Match) {
      return "bg-green-600  text-white";
    }
    return " ";
  }
  const style = getStyle();
  return (
    <div
      className={` h-16 w-16 m-1 flex items-center justify-center rounded-md border-2  ${style}`}
    >
      <p className="  text-4xl  w-fit">{props.letter.toUpperCase()}</p>
    </div>
  );
}
