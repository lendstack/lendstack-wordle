import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaChartBar } from 'react-icons/fa';

const Header = () => {
  const [howToPlayModal, setHowToPlayModal] = useState(false);
  const [statisticsModal, setStatisticsModal] = useState(false);

  const openHowToPlayModal = () => {
    setHowToPlayModal(true);
  };

  const closeHowToPlayModal = () => {
    setHowToPlayModal(false);
  };

  const openStatisticsModal = () => {
    setStatisticsModal(true);
  };

  const closeStatisticsModal = () => {
    setStatisticsModal(false);
  };

  return (
    <div className="bg-purple-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Wrdle Logo */}
        <Link to="/" className="text-white text-xl font-extrabold">
          Wrdle
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* How to Play Icon */}
        <FaInfoCircle
          className="text-white cursor-pointer"
          size={24}
          onClick={openHowToPlayModal}
        />

        {/* Statistics Icon */}
        <FaChartBar
          className="text-white cursor-pointer"
          size={24}
          onClick={openStatisticsModal}
        />
      </div>

      {/* How to Play Modal */}
      {howToPlayModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md mx-4">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <p className="text-gray-600">
            Guess the Wordle in 6 tries. Each guess must be a valid 5-letter word.
            The color of the tiles will change to show how close your guess was to the word.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-correct mr-2 rounded-full"></div>
              <span>Correct: Correct letter and correct position</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-nearly mr-2 rounded-full"></div>
              <span>Nearly: Correct letter but in the wrong place</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-inCorrect mr-2 rounded-full"></div>
              <span>Incorrect: Letter not in the word</span>
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
            onClick={closeHowToPlayModal}
          >
            Close
          </button>
        </div>
      </div>
      )}

      {/* Statistics Modal */}
      {statisticsModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            {/* Display total plays, wins, and losses */}
            <p className="text-gray-600">Total Plays: TODO</p>
            <p className="text-gray-600">Wins: TODO</p>
            <p className="text-gray-600">Losses: TODO</p>
            <button
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
              onClick={closeStatisticsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;