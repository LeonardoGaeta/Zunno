import SearchBar from "./components/SearchBar";
import SubContent from "@pages/Template/components/SubContent";
import History from "./components/History";
import Word from "@pages/Components/Word";

import { useWords, pickDailyWord } from "@contexts/WordsContext";

function SearchPage() {
    const { data } = useWords();
    const dailyWord = data.length > 0 ? pickDailyWord(data) : null;

    return (
        <div className="flex flex-col gap-3 text-(--secondary)">
            <SearchBar />
            <SubContent>
                <p className="mb-2 text-3xl">Pesquisas recentes</p>
                <History />
                <div className="mt-10 -mx-2 px-2 py-2 rounded-t-2xl shadow-custom-s w-[calc(100%+1rem)] flex flex-col items-center justify-center">
                    <p className="text-4xl">Word of the day</p>
                    <div className="border-b-2 border-(--secondary) w-full max-w-[18%]" />
                </div>
                <Word word={ dailyWord } />
            </SubContent>
        </div>
    )
}

export default SearchPage;