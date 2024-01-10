import { Word } from "./word";

export function WordRow(props: { word: string }) {
  const letters = props.word.split("");
  // if(letters.length < 5){
  //   for
  // }
  while (letters.length < 5) {
    letters.push(" ");
  }
  return (
    <div className="flex flex-row">
      {letters.map((char, index) => (
        <Word key={char + index} letter={char} />
      ))}
    </div>
  );
}
