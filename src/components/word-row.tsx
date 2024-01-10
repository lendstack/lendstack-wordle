import { LetterState } from "../db/word-utils";
import { Word } from "./word";

export function WordRow(props: { word: string; stats?: LetterState[] }) {
  const letters = props.word.split("");
  const stateDef = LetterState.Default;
  while (letters.length < 5) {
    letters.push(" ");
  }
  return (
    <div className="flex flex-row">
      {letters.map((char, index) => (
        <Word
          key={char + index}
          letter={char}
          state={props.stats ? props.stats[index] : stateDef}
        />
      ))}
    </div>
  );
}
