import { useContext, useEffect, useState } from "react";
import { globalContext } from "~/lib/context/globalContext";
import Grid from "../_components/Grid";
import Keyboard from "./Keyboard";
import useWordAnalyser from "~/lib/hooks/useWordAnalyser";
import isAlpha from "~/lib/utlis";
import Modal from "../_components/ui/Modal";
import GameStatus from "../_components/Status";
import { MdOutlineRefresh } from "react-icons/md";

const GameScreen: React.FC = ({}) => {
  const {
    turn,
  } = useContext(globalContext);
  const [isOpen, setIsOpen] = useState (false)
  const [status, setStatus] = useState (false)
  const {setGameCount, gameCount} = useContext (globalContext)

  const handle =  (e:KeyboardEvent) => {
    
  if (e.key === 'Enter' || e.key === 'Backspace')
    document?.getElementById(e.key)?.click ()
  else if (isAlpha (e.key))
      document?.getElementById(e.key.toUpperCase ())?.click ()
    console.log (e.key)
  }
  
  useEffect(() => {
    window.addEventListener("keyup",handle, true);
    
    return () => {
      window.removeEventListener("keyup", handle, true);
    };
  }, []);



  return (
    <div className="flex flex-col gap-3">
      <Modal  isOpen={isOpen} setIsOpen={setIsOpen} auto={true} size='sm'>
         <GameStatus setStatus={setStatus} status={status} setIsOpen={setIsOpen}/>
      </Modal>
      <Grid />
      <div className='flex gap-4 items-center justify-between'>
      <p className='text-sm text-mainPurple'>you have : {6 - (turn??0)} attempts</p>
      <button className='btn-link' onClick={()=> setGameCount?.((gameCount??0) + 1)}>
        <MdOutlineRefresh/>
      </button>
      </div>
      <Keyboard setIsOpen={setIsOpen} setStatus={setStatus}/>
    </div>
  );
};

export default GameScreen;
