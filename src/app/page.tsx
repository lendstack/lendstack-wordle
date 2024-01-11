import Wordle from './components/wordle'

  let word: string = "BRIEF";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start min-w-[500px] font-ny">
        <Wordle word={word} />
    </main>
  )
}
