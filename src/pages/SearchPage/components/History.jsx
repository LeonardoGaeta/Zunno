import { useEffect, useState } from "react";

import ArrowIcon from "@assets/Vetor - Seta.svg?react";
import ClockIcon from "@assets/Vetor - Relógio.svg?react";


function History() {
    const [history, setHistory] = useState(() => {
        const stored = localStorage.getItem("searchHistory");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }, [history]);


    return (
        <div className="relative w-full p-3 rounded-2xl">
            <div className="relative z-0 flex flex-col">
                { (history && history.length > 0) 
                ? history.map((word, index) => (
                    <div key={word} className="relative py-3">
                        <div className="flex gap-4 relative">
                            <ClockIcon className="text-(--black-transparent)" />
                            <p className="text-(--black-transparent)">{word}</p>
                            <ArrowIcon className="text-(--black-transparent) absolute right-0" />
                        </div>

                        {index !== history.length - 1 && (
                            <div className="border-b border-(--black-transparent) ml-10 mr-2 mt-2" />
                        )}
                    </div>
                ))
                : (
                    <div>
                        Vazio
                    </div>
                ) }
            </div>
            <div className="bg-(--extra-2) absolute inset-0 z-10 pointer-events-none rounded-2xl" />
        </div>
    )
}

export default History;