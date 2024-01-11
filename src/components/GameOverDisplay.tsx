import "../App.css";

export default function GameOverDisplay(props: {
  message: string;
  onPlayAgain: () => void;
}) {
  return (
    <div className="game-over-container">
      <p className="game-over-message">{props.message}</p>
      <button className="play-again-button" onClick={props.onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}
