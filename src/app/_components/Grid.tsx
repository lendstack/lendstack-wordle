import { useContext } from "react"
import { globalContext } from "~/lib/context/globalContext"

interface props {
    indexX: number
    indexY:number
}
const Item:React.FC<props> = ({indexX, indexY})=> {

    const {guessState, turn} = useContext (globalContext)
    const getColor = () => {
        if ((guessState?.[indexX]?.[indexY]) && ((turn??0) > indexX))
        {
            if (guessState?.[indexX]?.[indexY]?.status === 'match' )
                return "bg-green-400"
            else if (guessState?.[indexX]?.[indexY]?.status === 'partial-match')
                return "bg-yellow-400"
            else if ((guessState?.[indexX]?.[indexY]?.status === 'no-match'))
                return "bg-gray-400"
        }
        return "bg-gay-500/20"
    }
    return <div className={`w-[60px] h-[60px] rounded-sm border-2 border-gray-600/15 ${getColor ()} flex justify-center items-center `}>
        <p className='text-[18px] font-semibold'>{(guessState?.[indexX]?.[indexY])? guessState?.[indexX]?.[indexY]?.char : ''}</p>
    </div>
}

interface RowProps {
    index: number
}
const Row:React.FC<RowProps> = ({index}) => {

    const itemsArray:React.ReactElement[] = []

    for (let i = 0; i < 5; i++)
        itemsArray.push (<Item indexX={index} indexY={i} />)
    return <div className="flex gap-2">
        {itemsArray}
    </div>
}

const Grid:React.FC = ({}) => {

    const rowsArray: React.ReactElement[] = []

    for (let i = 0; i < 5; i++)
        rowsArray.push (<Row  index={i}/>)
    return <div className="flex flex-col gap-2 justify-center items-center">
        {rowsArray}
    </div>
}

export default Grid