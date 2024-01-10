import { Button, Image } from "@nextui-org/react";
import InfoModal from "./InfoModal";

function HomePage() {
  return (
    <div className="h-full w-full bg-[#ced4da] text-[#212529]">
      <div className="flex justify-center items-center flex-col h-[85%]   p-2 ">
        <div className="flex justify-self-center items-center  gap-4">
          <h1 className="font-bold text-[80px] font-header">Wordle</h1>
          <Image
            src="/wordle-icon.svg"
            alt="wordle-icon.svg"
            className="rounded-none"
          ></Image>
        </div>
        <h3 className="font-regular text-[18px] mb-8">
          Get 6 chances to guess a 5-letter word.
        </h3>
        <Button variant="flat">Play</Button>
      </div>
      <div className="w-full h-[15%] p-2 bg-white flex items-center flex-col justify-around">
        <InfoModal></InfoModal>
        <p className="font-regular text-[1rem]">{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default HomePage;
