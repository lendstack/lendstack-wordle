import "../App.css";

export default function WordsList(props: {guessedWord: string, targetWord: string}) {
  return (
    <div className="word-container">{
        props.guessedWord.split('').map((letter, index) => {
            let background = "black";
            if(props.targetWord[index] === letter)
                background = "green";
            else if(props.targetWord.includes(letter))
                background = "yellow";
            return <div className="letter-container"style={{background}} key={index}>
                <p>{letter}</p>
            </div>
        })
    }
    </div>
  )
}
