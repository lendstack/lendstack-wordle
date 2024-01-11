
export default function AttemptsDisplay(props: { attempts: number }) {
  return <p className="attempts">Remaining attempts: {props.attempts}</p>;
}
