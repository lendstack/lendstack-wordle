import CloseIcon from "@mui/icons-material/Close";

export default function Result(props: any) {
    const result = props.state == "win" ? "You won! 🏆" : "You lost! 😔";
    const handleNewGame = () => {
        window.location.reload();
    }

    return (
        <div className="absolute w-full h-full grid place-cente">
            <div
                className="z-10 flex place-self-center flex-col rounded-xl bg-white pb-10 drop-shadow-3xl dark:bg-zinc-800 dark:text-white"
                style={{ width: "min(600px, 90vw)", height: "min(300px, 70vh)" }}
            >
                <div className="flex justify-between items-center pb-5 bg-gray-400 dark:bg-gray-400 rounded-t-xl">
                    <hr />
                    <h2 className="font-black text-2xl pt-4">{result}</h2>
                    <CloseIcon
                        onClick={() => {
                        props.result(false);
                        }}
                    />
                </div>
                <div className="flex flex-col modal overscroll-contain overflow-y-scroll sm:px-7 items-center">
                    <p className="text-center text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
                        The answer was:
                    </p>
                    <div className="mb-5 h-8 w-24 sm:h-10 sm:w-24 border-dotted border-2 border-black dark:border- place-items-center p-0 m-0 text-lg sm:text-2xl">
                        {props.correct}
                    </div>
                    <button className="bg-green-400 hover:bg-green-600" onClick={handleNewGame}>
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
}