import { createContext, useState, useEffect, useContext } from "react";

const WordsContext = createContext();

function WordsProvider({ children }) {
    const [data, setData] = useState([]);
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();

            setToday(prev => {
                if (prev.getDate() !== currentDate.getDate()) {
                    return currentDate;
                }
                return prev;
            });
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch('/data/words.json?nocache=' + Date.now())
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Erro ao carregar JSON:', error));
    }, []);

    return (
        <WordsContext.Provider value={{ data, today }}>
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


const pickDailyWord = (words, date) => {
    if (!words || words.length === 0) return null;
    
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        hash = Math.imul(31, hash) + dateString.charCodeAt(i) | 0;
    }
    
    const rand = mulberry32(hash);
    const index = Math.floor(rand() * words.length);
    return words[index];
};

const useWords = () => useContext(WordsContext);

export { WordsProvider, useWords, pickDailyWord }   