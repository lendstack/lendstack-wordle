export default function HomePage() {
  function handleStart() {}
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <img src="/logo.svg" className="w-48 h-48" alt="logo" />
      <h1 className="text-2xl my-4">HixCoder Wordle</h1>
      <h2 className="text-3xl my-1">Get 6 chances to</h2>
      <h2 className="text-3xl my-1">guess a 5-letter word.</h2>

      <div className="my-4 ">
        <button
          onClick={handleStart}
          className="text-blue-950 bg-white mx-4 font-medium py-2.5 px-8 mt-2 mb-6 rounded-full w-fit "
        >
          How to Play
        </button>
        <button
          onClick={handleStart}
          className="text-blue-950 bg-white mx-4 font-medium py-2.5 px-8 mt-2 mb-6 rounded-full w-fit  "
        >
          Start
        </button>
      </div>
    </div>
  );
}
