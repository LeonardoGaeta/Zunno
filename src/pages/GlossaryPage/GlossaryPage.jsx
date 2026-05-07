import { useNavigate } from "react-router-dom";

import SubContent from "@template/components/SubContent";

import GoIcon from "@assets/images/Vetor - Ir.svg?react"
import SaveIcon from "@assets/images/Vetor - Salvar.svg?react";

import { useWords } from "@contexts/WordsContext";
import { useMemo, useState } from "react";

import useSavedWords from "@hooks/useSavedWords";
// import useSearchHistory from "@hooks/useSearchHistory";

function GlossaryPage() {
    // const { addToHistory } = useSearchHistory();

    const { sortedData } = useWords();
    const { savedWords, savedWordsSet } = useSavedWords();
    const navigate = useNavigate();

    const [toggleBookmarkeds, setToggleBookmarkeds] = useState(false);

    const filteredData = useMemo(() => {
        if (!toggleBookmarkeds) return sortedData;

        return sortedData.filter(word => 
            savedWordsSet.has(word.identification.name.en.toLowerCase())
        )
    }, [toggleBookmarkeds, sortedData, savedWordsSet]);

    const goToWord = (wordEn) => {
        navigate(`/word/${wordEn.toLowerCase()}`);
        // addToHistory(wordEn);
    }

    return (
        <SubContent>
            <div className="rounded-t-2xl shadow-custom-b w-[calc(100%+1rem)] py-3 rounded-b-2xl">
                <div className="flex relative items-center justify-center gap-3 pb-2 mx-16">
                    <div className="w-fit text-center">
                        <p className="text-4xl text-(--secondary)">Glossário</p>
                        <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                    </div>
                    <div
                      className={`cursor-pointer hover:scale-110 transition-all
                        ${!toggleBookmarkeds ? "outline-2 outline-(--secondary) text-(--secondary)" : "bg-(--secondary) text-(--bg)"} rounded-full p-3
                        absolute right-0
                      `}
                        onClick={() => setToggleBookmarkeds((prev) => !prev)}
                    >
                        <SaveIcon className="w-8 h-8" />
                    </div>
                </div>
            </div>
            <div className="w-[calc(100%+1rem)]">
                {filteredData.map((val, i) => {
                        const currentWord = val.identification.name.en;
                        const firstLetter = currentWord[0].toUpperCase();

                        const isNewLetter = i === 0 || firstLetter !== filteredData[i - 1].identification.name.en[0].toUpperCase();
                        const nextIsNewLetter = i < filteredData.length-1 
                            && firstLetter !== filteredData[i + 1].identification.name.en[0].toUpperCase();

                        return (
                            <div
                              className="flex flex-col w-full"
                              key={i}
                            >
                                {isNewLetter && (
                                    <div className={`text-center text-4xl text-(--secondary) py-4 ${i === 0 ? "shadow-custom-b" : "shadow-custom-sb rounded-t-2xl"}`}>
                                        {firstLetter}
                                    </div>
                                )}
                                <div className={`${!nextIsNewLetter && i < filteredData.length - 1 ? "shadow-custom-b" : ""}`}>
                                    <div
                                      className="flex items-center justify-between cursor-pointer hover:scale-101 transition-transform p-10"
                                      onClick={() => goToWord(currentWord)}
                                    >
                                        <div className="flex gap-6">
                                            <SaveIcon className={`self-center h-8 w-auto
                                              ${savedWords.includes(currentWord.toLowerCase()) ? "text-(--secondary) fill-(--secondary)" : "text-(--bg)"}`}
                                            />
                                            <div>
                                                <div className="flex items-end gap-2">
                                                    <p className="text-4xl border-0 text-(--text-topper)">{val.identification.name.en}</p>
                                                    <p className="text-(--black-transparent) capitalize">({val.data.classification})</p>
                                                </div>
                                                <p className="text-(--black-transparent)">{val.identification.name.pt[0]}</p>
                                            </div>
                                        </div>
                                        <GoIcon className="text-(--black-transparent)" />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </SubContent>
    )
}

export default GlossaryPage;