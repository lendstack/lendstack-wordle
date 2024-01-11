import { useEffect } from 'react';
import useWordleStore from '../Hooks/useWordleStore';

const KeyPad = ({ usedKeys }: any) => {
    const { letters, setLetters } = useWordleStore();
    useEffect(() => {
        console.log('usedkeys:', usedKeys);
    }, [usedKeys]);
    return (
        <div className="keypad">
            {letters &&
                letters.map((letter, i) => {
                    const color = usedKeys[letter.key.toLowerCase()];
                    return (
                        <div
                            key={letter.key}
                            className={`keypad-button ${color}`}
                        >
                            {letter.key}
                        </div>
                    );
                })}
        </div>
    );
};
export default KeyPad;
