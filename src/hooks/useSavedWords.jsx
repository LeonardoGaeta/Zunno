import { useState } from "react";


function useSavedWords() {
    const [savedWords, setSavedWords] = useState(() => {
        const sotred = localStorage.getItem("savedWords");
        return sotred ? JSON.parse(sotred) : [];
    });
}

export default useSavedWords;