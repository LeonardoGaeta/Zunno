import SearchBar from "./components/SearchBar";

import { useWords } from "../../contexts/WordsContext";

function SearchPage() {
    const { data } = useWords();

    return (
        <div>
            <SearchBar />
            
        </div>
    )
}

export default SearchPage;