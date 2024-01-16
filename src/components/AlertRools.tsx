export default function AlertRools() {
    return (
      <div className="text-start">
        <h1 className="text-3xl text-center font-bold text-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          Welcome to Wordle.
        </h1>
        <h2 className="text-xl font-semibold mt-4">How To Play:</h2>
        <ul className="text-base font-medium flex flex-col items-start list-disc list-inside ml-1 mt-2 gap-1">
          <li>Guess the Wordle in 6 tries.</li>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was to
            the word.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">Example:</h2>
        <div className="flex gap-1 mt-2">
          <span className="border border-gray-700 rounded-md text-center w-11 bg-green-300">
            H
          </span>
          <span className="border border-gray-700 rounded-md text-center w-11 bg-yellow-200">
            E
          </span>
          <span className="border border-gray-700 rounded-md text-center w-11 bg-gray-200">
            L
          </span>
          <span className="border border-gray-700 rounded-md text-center w-11 bg-gray-200">
            L
          </span>
          <span className="border border-gray-700 rounded-md text-center w-11 bg-green-400">
            O
          </span>
        </div>
        <p className="text-base mt-2 text-gray-600">
          In the example above, the{" "}
          <span className="text-green-600 underline">green</span> letters is
          correct, the <span className="text-yellow-600 underline">yellow</span>{" "}
          letter is in the word but in the wrong position, and the{" "}
          <span className="text-gray-500 underline">gray</span> letters are not in
          the word.
        </p>
      </div>
    );
  }
  