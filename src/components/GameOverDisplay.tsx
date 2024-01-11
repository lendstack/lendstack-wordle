import "../App.css";

export default function GameOverDisplay(props: {
  win:boolean;
  targetWord:string;
  message: string;
  onPlayAgain: () => void;
}) {
  return (
    <div className="game-over-container">
      <p className="game-over-message">{props.message}</p>
      <p className="answer-label">the answer was</p>
      <p className="target-word">{props.targetWord}</p>
      <button className="play-again-button" onClick={props.onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}
