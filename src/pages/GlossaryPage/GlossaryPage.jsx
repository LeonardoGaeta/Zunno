import SubContent from "@template/components/SubContent";
import { useWords } from '@contexts/WordsContext';
import GoIcon from "@assets/images/Vetor - Ir.svg?react"
import { useNavigate } from "react-router-dom";
// import useSearchHistory from "@hooks/useSearchHistory";

function GlossaryPage() {
    // const { addToHistory } = useSearchHistory();

    const { sortedData } = useWords();
    const navigate = useNavigate();

    const goToWord = (wordEn) => {
        navigate(`/word/${wordEn.toLowerCase()}`);
        // addToHistory(wordEn);
    }

    return (
        <SubContent>
            <div className="rounded-t-2xl shadow-custom-b w-[calc(100%+1rem)] py-3 rounded-b-2xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-fit text-center">
                        <p className="text-4xl text-(--secondary)">Glossário</p>
                        <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                    </div>
                </div>
            </div>
            <div className="w-[calc(100%+1rem)]">
                {sortedData.map((val, i) => {
                        const currentWord = val.identification.name.en;
                        const firstLetter = currentWord[0].toUpperCase();

                        const isNewLetter = i === 0 || firstLetter !== sortedData[i - 1].identification.name.en[0].toUpperCase();
                        const nextIsNewLetter = i < sortedData.length-1 
                            && firstLetter !== sortedData[i + 1].identification.name.en[0].toUpperCase();

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
                                <div className={`${!nextIsNewLetter ? "shadow-custom-b" : ""}`}>
                                    <div
                                      className="flex items-center justify-between cursor-pointer hover:scale-101 transition-transform p-10"
                                      onClick={() => goToWord(currentWord)}
                                    >
                                        <div>
                                            <div className="flex items-end gap-2">
                                                <p className="text-4xl border-0 text-(--text-topper)">{val.identification.name.en}</p>
                                                <p className="text-(--black-transparent) capitalize">({val.data.classification})</p>
                                            </div>
                                            <p className="text-(--black-transparent)">{val.identification.name.pt[0]}</p>
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