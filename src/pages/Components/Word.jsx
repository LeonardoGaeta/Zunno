    import { useWords, pickDailyWord } from "@contexts/WordsContext";

    import EarIcon from '@assets/Vetor - Ouvir.svg?react';
    import SaveIcon from '@assets/Vetor - Salvar.svg?react';

    function Word({ word }) {
        if (!word) return null;

        return(
            <div className="w-[calc(100%+1rem)]">
                <div className="flex justify-between px-6 shadow-custom-b">
                    <div className="text-(--text-topper) text-4xl">{word.identification.name.en}</div>
                    <div className="flex gap-2">
                        <div className="bg-(--secondary) p-3 rounded-full">
                            <EarIcon className="text-(--tertiary) w-8 h-8" />
                        </div>
                        <div className="bg-(--secondary) p-3 rounded-full">
                            <SaveIcon className="text-(--tertiary) w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Word;