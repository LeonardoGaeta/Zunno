import React, { useEffect, useState } from 'react';

import LanguageSection from './components/LanguageSection';
import ButtonAction from './components/Button';

import LoadingDots from '@components/LoadingDots';

import SubContent from "@template/components/SubContent";

import useTextToSpeech from '@hooks/useTextToSpeech';
import useSavedWords from '@hooks/useSavedWords';
import useSearchHistory from '@hooks/useSearchHistory';

import ttsService from '@services/ttsService';

function ConfigPage() {
    const { voices, isReady, refreshProfiles, profiles } = useTextToSpeech();
    const { clearHistory } = useSearchHistory();
    const { clearSavedWords } = useSavedWords();
    
    const [tempProfiles, setTempProfiles] = useState({});

    useEffect(() => {
        setTempProfiles(profiles);
    }, [profiles])

    // const ptVoices = (voices || []).filter(v => v.lang.includes('pt'));
    const enVoices = (voices || []).filter(v => v.lang.includes('en'));

    const handleChange = (lang, field, value) => {
        setTempProfiles(prev => ({
            ...prev,
            [lang]: { ...prev[lang], [field]: value }
        }));
    };

    const handleSaveAll = () => {
        // ttsService.saveProfile('pt-BR', tempProfiles['pt-BR']);
        ttsService.saveProfile('en-US', tempProfiles['en-US']);
        
        refreshProfiles();
    };

    const handleReset = () => {
        if (confirm("Deseja resetar todas as configurações para o padrão?")) {
            ttsService.resetProfile();
            refreshProfiles();
            
            const defaults = ttsService.getAllProfiles();
            setTempProfiles(defaults);
        }
    };

    if (!isReady) return (
        <SubContent>
            <div className="p-8 text-(--secondary) text-center">
                Carregando sintetizador
                <LoadingDots />
            </div>
        </SubContent>
    );

    return (
        <SubContent>
            <div className="rounded-2xl shadow-custom-b w-[calc(100%+1rem)] py-3">
                <div className="w-fit text-center mx-auto">
                    <p className="text-4xl text-(--secondary) mb-1">Configurações</p>
                    <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                </div>
            </div>
            <p className="inline sm:hidden mt-6 text-3xl text-(--secondary)">Limpar:</p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:gap-x-24 my-6 justify-items-center w-full max-w-2xl mx-auto px-4">
                <ButtonAction background={"black-transparent-2"} handle={clearHistory}>
                <span className="hidden sm:inline">Limpar&nbsp;</span>Histórico
                </ButtonAction>

                <ButtonAction background={"banana"} handle={clearSavedWords}>
                <span className="hidden sm:inline">Limpar&nbsp;</span>Salvos
                </ButtonAction>
            </div>

            {/* <div className="rounded-2xl shadow-custom-sb w-[calc(100%+1rem)] py-3">
                <div className="w-fit text-center mx-auto">
                    <p className="text-3xl text-(--secondary) mb-1">Voz: Português (Brasil)</p>
                </div>
            </div>
            <LanguageSection
              langKey={"pt-BR"}
              voices={ptVoices}
              data={tempProfiles['pt-BR']}
              onChange={handleChange}
              /> */}

            <div className="rounded-2xl shadow-custom-sb w-[calc(100%+1rem)] py-3">
                <div className="w-fit text-center mx-auto">
                    <p className="text-3xl text-(--secondary) mb-1">Voz: Inglês (US)</p>
                </div>
            </div>
            <LanguageSection
              langKey={"en-US"}
              voices={enVoices}
              data={tempProfiles['en-US']}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:gap-x-24 mb-6 justify-items-center w-full max-w-2xl mx-auto px-4">
                <ButtonAction background={"secondary-transparent"} handle={handleReset}>
                    Resetar<span className="hidden sm:inline">&nbsp;Padrão</span>
                </ButtonAction>

                <ButtonAction background={"tertiary-transparent"} handle={handleSaveAll}>
                    Salvar<span className="hidden sm:inline">&nbsp;Mudanças</span>
                </ButtonAction>
            </div>
        </SubContent>
    );
};

export default ConfigPage;