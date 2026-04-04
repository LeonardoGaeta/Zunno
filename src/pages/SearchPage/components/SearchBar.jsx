import SearchIcon from '../../../assets/footerBtns/Vetor - Pesquisar.svg?react'

function SearchBar() {
    return (
        <div className="bg-(--bg) rounded-full p-2 shadow-custom-b">
            <div className="bg-(--primary) rounded-full py-2 px-4 flex items-center gap-2 shadow-custom-b">
                <SearchIcon className="w-7 text-(--black-transparent)" />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="placeholder-(--black-transparent) w-full focus:outline-none flex-1 text-[17px]"
                    name="searchBar"
                    id="searchBar"
                />
            </div>
        </div>
    );
}

export default SearchBar;