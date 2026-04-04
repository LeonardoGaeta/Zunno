import { useEffect, useState } from "react";

import GoIcon from "../../../assets/Vetor - Ir.svg?react";
import ClockIcon from "../../../assets/Vetor - Relógio.svg?react";


function History() {
    const [history, setHistory] = useState(() => {
        const stored = localStorage.getItem("searchHistory");
        return stored ? JSON.parse(stored) : ["Item 1", "Item 2", "Item 3"];
    });

    useEffect(() => {
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }, [history]);


    return (
        <div className="relative w-full p-3">
            <div className="relative z-0 flex flex-col gap-4">
                { (history && history.length > 0) 
                ? history.map((word, key) => (
                    <div key={key} className="flex gap-4">
                        <ClockIcon className="text-(--black-transparent)" />
                        <p className="text-(--black-transparent)">{word}</p>
                        <GoIcon className="text-(--black-transparent) absolute right-0" />
                    </div>
                ))
                : (
                    <div>
                        Vazio
                    </div>
                ) }
            </div>
            <div className="bg-(--extra-2) absolute inset-0 z-10 pointer-events-none" />
        </div>
    )
}

export default History;