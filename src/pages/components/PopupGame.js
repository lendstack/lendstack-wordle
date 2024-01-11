import React, { useState } from 'react';

const IntroductionPopup = ({ isOpen, setIsOpen }) => {


  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <div className="introduction-popup">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <h2>How To Play</h2>
            <h3>Guess the Wordle in 6 tries.</h3>
            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>The color of the tiles will change to show how close your guess 
                was to the word.</li>
            </ul>
            <div>
              <p>Examples</p>
              <lu className="Example">
                <li>If the word is <span className='li'>green</span>, it is in the correct spot. </li>
                <li>If the word is <span className='li1'>yellow</span>, it is in the word but in the wrong spot. </li>
                <li>If the word is <span className='li2'>grey</span>, it is not in the word in any spot. </li>
              </lu>
            </div>
            </div>
          </div>

      {/* The rest of your application content */}
    </div>
  );
};

export default IntroductionPopup;
