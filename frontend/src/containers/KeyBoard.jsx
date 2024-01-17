

const KeyBoard = ({handleKeyPress}) => {

  return (
    <div className=" w-full flex flex-col">
      <div className="w-full mb-2 flex items-center justify-around">
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
              <button 
                key={key} 
                onClick={() => handleKeyPress(key)}
                className="border border-[##b2c5e6] h-12 rounded-lg flex flex-1 justify-center 
                items-center mr-1 last:mr-0 font-bold uppercase cursor-pointer select-none"
              >
                {key}
              </button>
        ))}
      </div>

      <div className="w-full mx-auto mb-2 flex items-center justify-around">
        <div className="ml-6" />
          {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
                <button key={key}
                onClick={() => handleKeyPress(key)}
                className="border border-[##CFD6E2] h-12 rounded-lg flex flex-1 justify-center 
                items-center mr-1 last:mr-0 font-bold uppercase cursor-pointer select-none">
                  {key}
                </button>
          ))}
        <div className="mr-6"/>
      </div>

      <div className="w-full mx-auto mb-2 flex items-center justify-around">
        {["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"].map((key) => (
              <button key={key}
              onClick={() => handleKeyPress(key)}
              className="border border-[##CFD6E2] h-12 rounded-lg flex flex-1 justify-center 
              items-center mr-1 last:mr-0 font-bold uppercase cursor-pointer select-none">
                {key}
              </button>
        ))}
      </div>
      
    </div>
  )
}

export default KeyBoard