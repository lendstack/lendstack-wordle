import Image from 'next/image'
import Wordle from './components/wordle'

  let word: string = "HELLO";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Wordle word={word} />
    </main>
  )
}
