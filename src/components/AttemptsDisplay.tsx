import "../App.css";

export default function AttemptsDisplay(props: { attempts: number }) {
  const attemptsClassName = props.attempts <= 3 ? 'attempts low' : 'attempts';

  return <p className={attemptsClassName}>Remaining attempts: {props.attempts}</p>;
}

