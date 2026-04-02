import { createContext, useState, useEffect, useContext } from "react";

const WordsContext = createContext();

function WordsProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/words.json') // Caminho correto para a pasta public
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

const useWords = () => useContext(WordsContext);

export { WordsProvider, useWords }