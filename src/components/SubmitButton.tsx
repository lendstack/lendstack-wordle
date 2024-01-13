export default function SubmitButton({ guess }: { guess: string }) {
  return (
    <button
      className={`w-[7rem] mt-2 py-0.5 rounded-2xl bg-[#227F22] text-white 
      ${guess !== "" ? "hover:bg-[#57AC57]" : ""}`}
      type="submit"
    >
      Submit
    </button>
  );
}
