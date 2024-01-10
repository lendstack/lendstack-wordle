export function Word(props: { letter: string }) {
  return (
    <div className="  h-16 w-16 m-2 bg-white flex items-center justify-center">
      <p className=" text-black text-4xl  w-fit">
        {props.letter.toUpperCase()}
      </p>
    </div>
  );
}
