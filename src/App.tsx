import { WordRow } from "./components/word-row";

export default function App() {
  // const random = getRandomWord();
  return (
    <div className="min-h-screen w-screen">
      <div>
        <h1 className="mx-auto mt-8 text-center">HixCoder Wordle</h1>
        <div className="w-full flex flex-col justify-center items-center my-8">
          <WordRow word="hello" />
          <WordRow word="hello" />
          <WordRow word="hello" />
          <WordRow word="hello" />
          <WordRow word="hello" />
        </div>
      </div>
    </div>
  );
}
