import SubContent from "@template/components/SubContent";
import { useWords } from '@contexts/WordsContext';
import { useState } from "react";
import GoIcon from "@assets/images/Vetor - Ir.svg?react"

function GlossaryPage() {
    const { sortedData } = useWords();

    console.log(sortedData);

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

                        return (
                            <div className="flex flex-col w-full">
                                {isNewLetter && (
                                    <div className="text-center text-4xl text-(--secondary) py-4 shadow-custom-b">
                                        {firstLetter}
                                    </div>
                                )}
                                <div className="shadow-custom-b py-10 px-10 flex items-center justify-between">
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
                        );
                    }
                )}
            </div>
        </SubContent>
    )
}

export default GlossaryPage;