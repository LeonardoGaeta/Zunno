    import EarIcon from '@assets/images/Vetor - Ouvir.svg?react';
    import SaveIcon from '@assets/images/Vetor - Salvar.svg?react';

    function Word({ word }) {
        if (!word) return null;

        return(
            <div className="w-[calc(100%+1rem)]">
                {/* Header */}
                <div className="flex justify-between px-6 py-2 shadow-custom-b">
                    <div className="text-(--text-topper) text-4xl">{word.identification.name.en}</div>
                    <div className="flex gap-2">
                        <div className="bg-(--secondary) p-3 rounded-full">
                            <EarIcon className="text-(--tertiary) w-8 h-8" />
                        </div>
                        <div className="bg-(--secondary) p-3 rounded-full">
                            <SaveIcon className="text-(--tertiary) w-8 h-8" />
                        </div>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className='py-4 px-8 text-(--text-topper) flex flex-col gap-2'>
                    <div className='flex'>
                        <p>Tradução:</p>
                        <p>Cocô</p>
                    </div>
                    <div className='flex'>
                        <p>Pronúncia:</p>
                        <p>Cocô</p>
                    </div>
                    <div className='flex'>
                        <p>Significado:</p>
                        <p>Cocô</p>
                    </div>
                    <div className='flex'>
                        <p>Exemplo de frase:</p>
                        <p>Cocô</p>
                    </div>
                    <div className='flex'>
                        <p>Corresponência visual:</p>
                        <p>Cocô</p>
                    </div>
                    <div className='flex'>
                        <p>Palavras relacionadas:</p>
                        <p>Cocô</p>
                    </div>
                </div>
            </div>
        );
    }

    export default Word;