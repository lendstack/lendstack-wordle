import "../App.css";

export default function WordsList(props: {guessedWord: string, targetWord: string}) {
    const lowerCaseTargetWord = props.targetWord.toLowerCase();
    let lettersMap = new Map<string, number>();
  return (
    <div className="word-container">{
        props.guessedWord.split('').map((letter, index) => {
            const lowercaseLetter = letter.toLowerCase();
            const letterCount = lowerCaseTargetWord.split(lowercaseLetter).length - 1;
            let background = "black";
            if(lowerCaseTargetWord[index] === lowercaseLetter)
            {
                background = "green";
                lettersMap.set(lowercaseLetter, lettersMap.get(lowercaseLetter) ?? 0 + 1);
            }
            else if(letterCount > 0 && (lettersMap.get(lowercaseLetter) ?? 0) < letterCount)
            {
                background = "yellow";
                lettersMap.set(lowercaseLetter, lettersMap.get(lowercaseLetter) ?? 0 + 1);
            }
            return <div className="letter-container"style={{background}} key={index}>
                <p>{letter}</p>
            </div>
        })
    }
    </div>
  )
}
