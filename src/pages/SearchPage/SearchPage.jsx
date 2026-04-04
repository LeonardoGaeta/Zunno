import SearchBar from "./components/SearchBar";
import History from "./components/History";
import SubContent from "../Template/components/SubContent";

import { useWords } from "../../contexts/WordsContext";

function SearchPage() {
    const { data } = useWords();

    return (
        <div className="flex flex-col gap-3">
            <SearchBar />
            <SubContent>
                <p className="text-(--secondary)">Pesquisas recentes</p>

                <History />
            </SubContent>
        </div>
    )
}

export default SearchPage;