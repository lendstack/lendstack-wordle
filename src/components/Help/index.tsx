import CloseIcon from "@mui/icons-material/Close";

function Box(props: any) {
    let state = "text-black border-2 border-gray-300 dark:bg-slate-200 dark:text-black";
    if (props.state === "C") state = "bg-green-600 text-white";
    if (props.state === "E") state = "bg-yellow-400 text-white";
    if (props.state === "W") state = "bg-gray-500 text-white dark:bg-gray-400";
  
    return (
      <div
        className={
          "w-8 h-8 sm:w-10 sm:h-10 grid place-items-center p-0 m-0 font-bold text-lg sm:text-2xl " + state
        }
      >
        {props.value}
      </div>
    );
}

export default function Help(props: any) {

    return (
        <div className="absolute w-full h-full grid place-cente">
            <div
                className="z-10 flex place-self-center flex-col rounded-xl bg-white p-5 pb-10 drop-shadow-3xl dark:bg-zinc-800 dark:text-white"
                style={{ width: "min(600px, 90vw)", height: "min(580px, 80vh)" }}
            >
                <div className="flex justify-between items-center pb-5">
                    <CloseIcon className="text-white dark:text-zinc-800" />
                    <h2 className="font-black text-2xl">How to play this game?</h2>
                    <CloseIcon
                        onClick={() => {
                        props.help(false);
                        }}
                    />
                </div>
                <div className="modal overscroll-contain overflow-y-scroll sm:px-7">
                    <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
                        The objective of WORDLE game is to guess the secret five-letter word within six attemps. How to do that?
                        <br />
                        <b>1.</b> Type a five-letter word into the input box and submit your guess.
                        <br />
                        <b>2.</b> After submitting a guess, you will see colored tiles next to your guess indicating the correctness of each letter.
                        <br />
                        <b>3.</b> Use the feedback to make informed guesses. Pay attention to the placement and color of the tiles to refine your choices.
                        <br />
                        <b>4.</b> Repeat steps 1-3 until you correctly guess the secret word or exhaust all six attempts.
                    </p>
                    <hr />
                    <h3 className="text-left font-bold py-5">Examples</h3>
                    <p className="text-left text-sm sm:text-base font-regular opacity-75 mr-1">Let's say that the correct word is "SMART"</p>
                    <br />
                    <div className="flex gap-1">
                        <Box value="S" state="C" />
                        <Box value="W" />
                        <Box value="E" />
                        <Box value="E" />
                        <Box value="T" />
                    </div>
                    <p className="text-left text-sm sm:text-base py-2 opacity-75">
                        The letter <b>S</b> is in the word and in the correct spot.
                    </p>
                    <div className="flex gap-1">
                        <Box value="A" />
                        <Box value="L" />
                        <Box value="B" />
                        <Box value="U" />
                        <Box value="M" state="E"/>
                    </div>
                    <p className="text-left text-sm sm:text-base py-2 opacity-75">
                        The letter <b>M</b> is in the word and not in the correct spot.
                    </p>
                    <div className="flex gap-1">
                        <Box value="A" />
                        <Box value="R" state="W" />
                        <Box value="S" />
                        <Box value="O" />
                        <Box value="W" />
                    </div>
                    <p className="text-left text-sm sm:text-base py-2 opacity-75">
                        The letter <b>R</b> is not in the word.
                    </p>
                </div>
            </div>
            <div
                className="z-0 absolute w-full h-full grid place-cente"
                onClick={() => {
                props.help(false);
                }}
            />
        </div>
    );
}