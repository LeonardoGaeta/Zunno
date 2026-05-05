import SubContent from "@template/components/SubContent";
import { useWords } from '@contexts/WordsContext';

function GlossaryPage() {
    const { sortedData } = useWords();

    console.log(sortedData);

    return (
        <SubContent>
            <div className="rounded-t-2xl shadow-custom-b w-[calc(100%+1rem)] py-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-fit text-center">
                        <p className="text-4xl text-(--secondary)">Glossário</p>
                        <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                    </div>
                </div>
            </div>
        </SubContent>
    )
}

export default GlossaryPage;