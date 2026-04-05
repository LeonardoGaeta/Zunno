import SearchBar from "./components/SearchBar";
import SubContent from "../Template/components/SubContent";
import History from "./components/History";
import DailyWord from "./components/DailyWord";

import { useWords } from "../../contexts/WordsContext";

function SearchPage() {
    const { data } = useWords();

    return (
        <div className="flex flex-col gap-3">
            <SearchBar />
            <SubContent>
                <p className="text-(--secondary)">Pesquisas recentes</p>

                <History />
                <DailyWord />
            </SubContent>
        </div>
    )
}

export default SearchPage;