import SearchIcon from '@assets/images/footerBtns/Vetor - Pesquisar.svg?react'
import { useNavigate } from 'react-router-dom';
import { useWords } from '@contexts/WordsContext';
import { useEffect, useState } from 'react';
import useSearchHistory from '@hooks/useSearchHistory';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [isClosing, setIsClosing] = useState(false);
    const [visible, setVisible] = useState(false);
    const { data } = useWords();
    const navigate = useNavigate();
    const { addToHistory } = useSearchHistory();

    useEffect(() => {
        const searchLower = query.toLowerCase();

        if (query.trim().length > 0) {
            const filtered = data.filter((item) => {
                const nameEn = item.identification.name.en.toLowerCase();
                const namePt = item.identification.name.pt.some(
                    p => p.toLowerCase().includes(searchLower)
                );
                
                return nameEn.includes(searchLower) || namePt;
            }).slice(0, 5);
            
            setSuggestion(filtered);

            setVisible(true);
            setIsClosing(false);
        } else {
            setIsClosing(true);

            const timer = setTimeout(() => {
                setSuggestion([]);
                setVisible(false);
                setIsClosing(false);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [query, data]);

    const goToWord = (wordEn) => {
        navigate(`/word/${wordEn.toLowerCase()}`);
        setQuery("");
        setSuggestion([]);
        addToHistory(wordEn);
    }

    return (
        <div className="relative w-full">
            <div className="bg-(--bg) rounded-full p-2 shadow-custom-b">
                <div className="bg-(--primary) rounded-full py-2 px-4 flex items-center gap-2 shadow-custom-b">
                    <SearchIcon className="w-7 text-(--black-transparent)" />
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="placeholder-(--black-transparent) w-full focus:outline-none flex-1 text-[17px]"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter'
                                    && suggestion[0]
                                    && goToWord(suggestion[0].identification.name.en)
                        }
                    />
                </div>
            </div>

            {visible && (
                <ul className={`
                    absolute left-1/2 z-20 w-[50%] bg-(--bg) mt-2 rounded-2xl shadow-custom-b overflow-hidden border border-(--primary)
                    transform-[translateX(-50%)]
                    ${isClosing 
                        ? "animate-[fadeOut_0.2s_ease-out] opacity-0" 
                        : "animate-[fadeIn_0.2s_ease-out] opacity-100"}
                `}>
                    {suggestion.length > 0 ? (
                        suggestion.map((item, i) => (
                            <li
                                key={i}
                                onClick={() => goToWord(item.identification.name.en)}
                                className="pl-12 py-4 hover:bg-(--primary) cursor-pointer flex justify-start items-end gap-2 border-b last:border-none border-(--bg)"
                            >
                                <span className="text-2xl text-(--black-transparent)">
                                    {item.identification.name.en}
                                </span>
                                <span className="text-lg text-(--secondary-transparent)">
                                    {item.identification.name.pt.join(", ")}
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="py-4 text-center text-(--black-transparent)">
                            Nenhum resultado encontrado
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;