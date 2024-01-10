
const GetKeysData = (attempt: string, world: string) => {
    let keysData: { letter: string; color: string }[] = [];
    keysData = [...attempt].map((letter, index) => {
        if (letter === "*") return { letter, color: "bg-gray-200" };
        if (letter === world[index])
            return { letter: letter, color: "bg-[#638C54]" };
        return { letter: letter, color: "bg-[#3A3A3C]" };
    });
    keysData = keysData.map((key, index) => {
        if (key.color === "bg-[#3A3A3C]") {
            const nbrLetterWorld = world.split(key.letter).length - 1;
            const nbrLetterAttemp = attempt.substring(0, index + 1).split(key.letter).length - 1;
            if (nbrLetterAttemp <= nbrLetterWorld && !keysData.includes({ letter: key.letter, color: "bg-[#638C54]" }))
                return { letter: key.letter, color: "bg-[#B49F4C]" };
        }
        return key;
    });

    return keysData;
};

export default GetKeysData;
