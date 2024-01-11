import WordDisplay from "./WordDisplay";

export function HistoryDisplay(props: {
  wordList: string[];
  targetWord: string;
}) {
  return (
    <div className="list-container">
      {props.wordList.map((word) => (
        <WordDisplay guessedWord={word} targetWord={props.targetWord} />
      ))}
    </div>
  );
}
