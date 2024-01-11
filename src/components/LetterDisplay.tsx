import "../App.css";

export default function LetterDisplay(props: {letter: string; color: string;}) {
  return (
    <div className="letter-container" style={{ background: props.color }}>
      <p>{props.letter}</p>
    </div>
  );
}
