import "../App.css";

export default function WordsList(props: {word: string}) {
    let background = "black";
  return (
    <div className="word-container">{
        props.word.split('').map((letter, index) => {
            return <div className="letter-container"style={{background}} key={index}>
                <p>{letter}</p>
            </div>
        })
    }
    </div>
  )
}
