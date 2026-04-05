    import { useWords, pickDailyWord } from "../../../contexts/WordsContext";

    function DailyWord() {
        const { data } = useWords();

        const palavraDoDia = data.length > 0 ? pickDailyWord(data) : null;

        return(
            <div>
            </div>
        );
    }

    export default DailyWord;