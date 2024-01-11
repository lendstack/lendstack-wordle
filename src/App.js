import { useEffect, useState } from 'react'
import Wordle from './components/Game'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    const dataSolutions = [
      {"id": 1, "word": "orbit"},
      {"id": 2, "word": "plume"},
      {"id": 3, "word": "spark"},
      {"id": 4, "word": "quest"},
      {"id": 5, "word": "flame"},
      {"id": 6, "word": "glide"},
      {"id": 7, "word": "dream"},
      {"id": 8, "word": "crest"},
      {"id": 9, "word": "chase"},
      {"id": 10, "word": "pride"},
      {"id": 11, "word": "trust"},
      {"id": 12, "word": "grace"},
      {"id": 13, "word": "brave"},
      {"id": 14, "word": "peace"},
      {"id": 15, "word": "jolly"}
    ];
    
    const randomSolution = dataSolutions[Math.floor(Math.random()*dataSolutions.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <div className="App mx-auto pt-40 bg-indigo-500 h-screen">
      
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App

