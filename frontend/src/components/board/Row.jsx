


export const Row = ({ guess , complete, solution}) => {
    const boxes = [];
    
    for(let i = 0; i < 5; i++){
      let style = "flex justify-center items-center border border-black w-9 h-9 rounded-lg"
      if (complete) {
        if (guess[i] === solution[i]){
          style += ' bg-correct';
        }
        else if (solution.includes(guess[i])){
          style += ' bg-nearly';
        }
        else {
          style += ' bg-inCorrect';
        }
      }
  
      boxes.push(<div key={i} className={style}>
                  <span className="font-bold uppercase">{guess[i]}</span>
                </div>
              );
    }
    
        return (
          <div className="flex gap-2 ">
            {boxes}
      </div>
    )
  }

export default Row;