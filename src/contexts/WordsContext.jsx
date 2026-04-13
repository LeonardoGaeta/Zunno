import { createContext, useState, useEffect, useContext } from "react";

const WordsContext = createContext();

function WordsProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/words.json')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Erro ao carregar JSON:', error));
    }, []);

    return (
        <WordsContext.Provider value={{ data }}>
            {children}
        </WordsContext.Provider>
    );
}
function mulberry32(seed) {
    return () => {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}

const useWords = () => useContext(WordsContext);


const pickDailyWord = (words) => {
    const today = new Date().toISOString().split("T")[0];

    let hash = 0;

    for (let i = 0 ; i < today.length ; i++) {
        hash = Math.imul(31, hash) + today.charCodeAt(i) | 0;
    }

    const rand = mulberry32(hash);

    return words[Math.floor(rand() * words.length)];
}

export { WordsProvider, useWords, pickDailyWord }