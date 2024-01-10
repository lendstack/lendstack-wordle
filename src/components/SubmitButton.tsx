export default function SubmitButton({
  guess,
}: // onSubmit,
{
  guess: string;
  // onSubmit: (e: any) => void;
}) {
  return (
    <button
      className={`w-[7rem] mt-2 py-0.5 rounded-2xl border-[1px] border-black ${
        guess !== "" ? "hover:bg-green-400" : ""
      }`}
      type="submit"
      // onClick={onSubmit}
    >
      Submit
    </button>
  );
}
