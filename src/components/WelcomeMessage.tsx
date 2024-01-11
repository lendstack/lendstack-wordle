
const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h2>Welcome to Wordle Quest!</h2>
      <p>Try to guess the hidden word in six tries.</p>
      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
    </div>
  );
};

export default WelcomeMessage;
