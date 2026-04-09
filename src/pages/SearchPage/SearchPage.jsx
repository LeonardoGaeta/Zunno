import SearchBar from "./components/SearchBar";
import SubContent from "@pages/Template/components/SubContent";
import History from "./components/History";
import Word from "@pages/Components/Word";

import { useWords, pickDailyWord } from "../../contexts/WordsContext";

function SearchPage() {
    const { data } = useWords();
    const dailyWord = data.length > 0 ? pickDailyWord(data) : null;

    return (
        <div className="flex flex-col gap-3">
            <SearchBar />
            <SubContent>
                <p className="text-(--secondary)">Pesquisas recentes</p>
                <History />
                <Word word={ dailyWord } />
            </SubContent>
        </div>
    )
}

export default SearchPage;