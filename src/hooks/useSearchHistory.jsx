import { useEffect, useState } from 'react';

function useSearchHistory() {
    const [history, setHistory] = useState(() => {
        const stored = localStorage.getItem("searchHistory");
        return stored ? JSON.parse(stored) : [];
    });

    const addToHistory = (word) => {
        setHistory(prev => {
            const updated = [word, ...prev.filter(w => w !== word)].slice(0, 5);
            return updated;
        })
    }

    const clearHistory = () => {
        setHistory([]);
    }

    useEffect(() => {
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }, [history]);

    return { history, addToHistory, clearHistory };
}

export default useSearchHistory;