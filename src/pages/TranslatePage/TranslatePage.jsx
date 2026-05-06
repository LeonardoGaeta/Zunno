import { useState } from "react";


function TranslatePage() {
    const [languageSwapped, setLanguageSwapped] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("en");

    const swapLanguage = () => {
        setLanguageSwapped((prev) => !prev);
        setCurrentLanguage(() => {
            return languageSwapped ? "pt" : "en";
        });
    }

    // const traduzir = async (text) => {
    //     try {
    //         const response = await(fetch)
    //     } catch (err) {

    //     }
    // }

    return (
        <div className="">
            EEEEEEE
        </div>
    );
}

export default TranslatePage;