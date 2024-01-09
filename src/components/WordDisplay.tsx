import Letter from "./letter";

export default function WorldDisplay({ attempts, word }: any) {
  return (
    <>
      {attempts.map((attempt: any, index: any) => (
        <div key={index} className="flex justify-evenly mt-2 gap-2">
          {[...attempt].map((letter, letterIndex) => (
            <Letter
              key={letterIndex}
              index={letterIndex}
              letter={letter}
              word={word}
            />
          ))}
        </div>
      ))}
    </>
  );
}
