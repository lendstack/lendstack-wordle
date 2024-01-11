import { forwardRef, useImperativeHandle, useState } from "react";
import { ReactComponent as Exit } from "../Exit.svg";
function Modal(
  {
    gameStatus,
    handleGameReset,
    solution,
    showInstructions,
    setShowInstructions,
  },
  ref
) {
  const [openModal, setOpenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setOpenModal(true),
  }));

  const onClose = () => {
    setOpenModal(false);
    handleGameReset();
  };

  if (!openModal && !showInstructions) return null;

  return (
    <div className="backdrop custom-h">
      <div className="modal">
        {showInstructions ? (
          <>
            <div className="exit-button-container">
              <Exit
                className="exit-button"
                onClick={() => setShowInstructions(false)}
              />
            </div>
            <div className="modal__title">How to play</div>
            <p className="keyboard__row">
              Guess the word in 6 tries. After each guess, the color of the
              tiles will change to show how close your guess was to the word.
            </p>

            <div className="keyboard__row">
              <div className="keyboard__letter correct">W</div>
              <div className="keyboard__letter">E</div>
              <div className="keyboard__letter">A</div>
              <div className="keyboard__letter">R</div>
              <div className="keyboard__letter">Y</div>
            </div>
            <p className="keyboard__row">
              The letter W is in the word and in the correct spot.
            </p>

            <div className="keyboard__row">
              <div className="keyboard__letter">P</div>
              <div className="keyboard__letter">I</div>
              <div className="keyboard__letter semi-correct">L</div>
              <div className="keyboard__letter">O</div>
              <div className="keyboard__letter">T</div>
            </div>
            <p className="keyboard__row">
              The letter L is in the word but in the wrong spot.
            </p>

            <div className="keyboard__row">
              <div className="keyboard__letter">V</div>
              <div className="keyboard__letter">A</div>
              <div className="keyboard__letter">G</div>
              <div className="keyboard__letter wrong">U</div>
              <div className="keyboard__letter">E</div>
            </div>
            <p className="keyboard__row">
              The letter U is not in the word in any spot.
            </p>
          </>
        ) : (
          <>
            <div>{gameStatus}</div>
            <p>The word was: {solution.toUpperCase()}</p>
            <div className="modal__button" onClick={onClose}> Play Again </div>
          </>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Modal);
