import ArrowIcon from "@assets/images/Vetor - Seta.svg?react";
import ClockIcon from "@assets/images/Vetor - Relógio.svg?react";
import useSearchHistory from '@hooks/useSearchHistory';
import { useNavigate } from 'react-router-dom';


function History() {
    const { history, addToHistory } = useSearchHistory();
    const navigate = useNavigate();

    const goToWord = (wordEn) => {
        navigate(`/word/${wordEn.toLowerCase()}`);
        addToHistory(wordEn);
    }

    return (
        <div className="relative w-full p-3 rounded-2xl">
            <div className="relative z-0 flex flex-col">
                { (history && history.length > 0) 
                ? history.map((word, index) => (
                    <div 
                        key={word}
                        className="relative py-3 cursor-pointer hover:scale-101 transition-transform bg-(--extra-2) rounded-2xl"
                        onClick={() => goToWord(word)}
                    >
                        <div className="flex items-center justify-between p-4">
                            <div className="flex gap-4">
                                <ClockIcon className="text-(--black-transparent) w-8 h-8" />
                                <p className="text-(--black-transparent)">{word}</p>
                            </div>
                            <ArrowIcon className="text-(--black-transparent) w-8 h-8" />
                        </div>

                        {index !== history.length - 1 && (
                            <div className="border-b-2 border-(--black-transparent) ml-10 mr-2 mt-2" />
                        )}
                    </div>
                ))
                : (
                    <div>
                        Vazio
                    </div>
                ) }
            </div>
        </div>
    )
}

export default History;