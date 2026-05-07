import EarIcon from '@assets/images/Vetor - Ouvir.svg?react';
import SaveIcon from '@assets/images/Vetor - Salvar.svg?react';

import Botao from './Button';

import useTextToSpeech from '@hooks/useTextToSpeech';
import useSavedWords from '@hooks/useSavedWords';

import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useWords } from "@contexts/WordsContext";

function Word({ word: propWord }) {
    const { wordName } = useParams();
    const { sortedData } = useWords();
    const { savedWordsSet, toggleWord } = useSavedWords();

    const [showTranslation, setShowTranslation] = useState({});
    
    const { speak, isReady: isSpeachReady, isSpeaking } = useTextToSpeech();
    
    const toggleTranslation = (index) => {
        setShowTranslation((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }
    
    const word = propWord || sortedData.find(
        w => w.identification.name.en.toLowerCase() === wordName?.toLocaleLowerCase()
    );
    
    if (!word) return null;

    return(
        <div className="w-[calc(100%+1rem)]">
            {/* Header */}
            <div className="flex justify-between px-6 py-2 shadow-custom-b flex-wrap">
                <div className="text-(--text-topper) text-4xl">{word.identification.name.en}</div>
                <div className="flex gap-2 flex-wrap">
                    <Botao 
                      isReady={isSpeachReady} 
                      isActive={isSpeaking} 
                      onClick={() => speak(word.identification.name.en)}>
                        <EarIcon className="w-8 h-8" />
                    </Botao>
                    <Botao 
                      isActive={savedWordsSet.has(word.identification.name.en.toLowerCase())} 
                      onClick={() => toggleWord(word.identification.name.en)}>
                        <SaveIcon className="text-(--tertiary) w-8 h-8" />
                    </Botao>
                </div>
            </div>

            {/* Conteúdo */}
            <div className='py-4 px-8 text-(--text-topper) flex flex-col gap-2'>
                {/* Palavra traduzida */}
                <div className='flex items-end gap-1 flex-wrap'>
                    <p className='text-3xl'>Tradução:</p>
                    <p className='text-(--black-transparent) dark:text-(--gray-transparent)'>
                        {word.identification.name.pt.join(" • ")}
                    </p>
                </div>
                {/* Pronúncia */}
                <div className='flex items-end gap-1 flex-wrap'>
                    <p className='text-3xl'>Pronúncia:</p>
                    <p className='text-(--black-transparent) dark:text-(--gray-transparent)'>
                        {word.data.pronunciation}
                    </p>
                </div>
                {/* Significado */}
                <div className='flex items-end gap-1 flex-wrap'>
                    <p className='text-3xl'>Significado:</p>
                    <p className='text-(--black-transparent) dark:text-(--gray-transparent)'>
                        {word.data.meaning}
                    </p>
                </div>
                {/* Exemplo de frases */}
                <div className='flex flex-col gap-1'>
                    <p className='text-3xl'>Exemplo de frase:</p>
                    <div className='text-(--black-transparent) dark:text-(--gray-transparent) ml-6 flex flex-col gap-5 flex-wrap'>
                        {word.data.exampleWords.map((val, i) => (
                            <div key={i}>
                                {/* Frase em ingles */}
                                <p>{val.en}</p>
                                
                                <div className='ml-6'>
                                    <div className="ml-6">
                                        <div className="relative">
                                            {/* Botão revelador */}
                                            <button
                                              onClick={() => toggleTranslation(i)}
                                              className={`
                                                bg-(--tertiary) text-(--secondary) cursor-pointer text-xl px-8 rounded-2xl shadow-custom-b
                                                hover:scale-110
                                                transition-all duration-300 ease-in-out
                                                ${showTranslation[i] ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}
                                              `}
                                            >
                                            Mostrar tradução
                                            </button>

                                            {/* Tradução */}
                                            <p
                                            className={`
                                                absolute top-0 left-0 text-(--black-transparent-2) dark:text-(--gray-transparent) text-xl
                                                transition-all duration-300 ease-in-out
                                                ${showTranslation[i] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                                            `}
                                            >
                                            {val.pt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Imagens */}
                {word.data.imageUrl[0] && (
                <div className='flex flex-col gap-1'>
                    <p className='text-3xl'>Corresponência visual:</p>
                    <div className='text-(--black-transparent) dark:text-(--gray-transparent) flex gap-5'>
                        {word.data.imageUrl.map((val, i) => (
                            <img key={i} src={val} alt={`Imagem para ${word.data.word}`} />
                        ))}
                    </div>
                </div>
                )}
                {/* Palavras relacionadas */}
                <div className='flex flex-col gap-1'>
                    <p className='text-3xl'>Palavras relacionadas:</p>
                    <div className='text-(--black-transparent) dark:text-(--gray-transparent)'>
                        {word.data.relatedWords.map((val, i) => (
                            <p key={i}>{val}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Word;