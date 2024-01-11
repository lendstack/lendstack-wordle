import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'

export default function HomePageMenu({SetRules}) {
    const start = useStoreActions((state)=> state.Start)

  return (
    <div className='flex gap-3 flex-col px-8 py-8 space-bettween bg-[#1A1A1A] border border-black rounded-[16px] mt-10'>
          <div className='py-2 w-52 text-center bg-white m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
            <button onClick={()=> SetRules(true)}>How To Play</button>
          </div>
          <div className='py-2 w-52 bg-white text-center m-auto rounded-[8px] hover:bg-[#D9D9D9]'>
          <Link to={'/Game'}>
            <button onClick={()=> start()}>Play</button>
          </Link>
          </div>
       </div>
  )
}
