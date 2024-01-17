import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Wordle Game</h1>
        <p className="text-lg mb-6">Guess the word and have fun!</p>
        
        {/* Add background animation (you can customize this based on your preference) */}
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 mx-auto text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Simple button to navigate to the game */}
        <Link to="/game">
          <button className="mt-8 px-6 py-3 bg-purple-600 text-lg font-semibold rounded-md hover:bg-purple-700 transition duration-300">
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;