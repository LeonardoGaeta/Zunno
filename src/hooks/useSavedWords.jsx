import { useEffect, useMemo, useState } from "react";


function useSavedWords() {
    const [savedWords, setSavedWords] = useState(() => {
        const stored = localStorage.getItem("savedWords");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("savedWords", JSON.stringify(savedWords))
    }, [savedWords]);

    const savedWordsSet = useMemo(() => new Set(savedWords), [savedWords]);

    const toggleWord = (wordEn) => {
        const word = wordEn.toLowerCase();

        setSavedWords((prev) => {
            if (prev.includes(word)) {
                return prev.filter((w) => w !== word);
            } return [...prev, word];
        });
    } 

    const clearSavedWords = () => {
        setSavedWords([]);
    }

    return { savedWords, savedWordsSet, toggleWord, clearSavedWords };
}

export default useSavedWords;