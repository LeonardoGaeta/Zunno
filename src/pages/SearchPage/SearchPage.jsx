import SearchBar from "./components/SearchBar";
import History from "./components/History";

import SubContent from "@template/components/SubContent";

import Word from "@components/Word";

import { useWords, pickDailyWord } from "@contexts/WordsContext";

function SearchPage() {
    const { sortedData, today } = useWords();
    const dailyWord = sortedData.length > 0 ? pickDailyWord(sortedData, today) : null;

    return (
        <div className="flex flex-col gap-3 text-(--secondary)">
            <SearchBar />
            <SubContent>
                <p className="mb-2 text-3xl text-center">Pesquisas recentes</p>
                <History />
                <div className="mt-10 -mx-2 px-2 py-2 rounded-t-2xl shadow-custom-s w-[calc(100%+1rem)]">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-fit text-center">
                            <p className="text-4xl">Word of the day</p>
                            <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                        </div>
                    </div>
                </div>
                <Word word={ dailyWord } />
            </SubContent>
        </div>
    )
}

export default SearchPage;