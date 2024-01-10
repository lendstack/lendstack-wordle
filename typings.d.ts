

type GlobalContext = {
    turn?: number
    setTurn?: (val:number) => void
    currentWord?: string
    setCurrentWord?: (val:string) => void
    guessState?: CharType[][]
    setGuessState?: (val:CharType[][]) => void
    indexX?:number
    indexY?:number
    setX?: (val:number) => void
    setY?: (val:number) => void
    setGameCount?: (val:number) => void
    gameCount?: number
}

type CharType = {
    char:string
    status: 'match' | 'partial-match' | 'no-match'
    color: string
}

