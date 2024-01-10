import React, { useContext } from 'react'

function key({ keyVal, bigKey }) {
    const { board, setBoard } = useContext(AppContext);

    const selectLetter = () => {
        const currBoard = [...board]
        currBoard[0][0] = keyVal
        setBoard(newBoard)
    }
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
        </div>
  )
}

export default key