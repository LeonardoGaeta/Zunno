import React, { useState } from 'react';

import LanguageSection from './components/LanguageSection';
import ButtonAction from './components/Button';

import SubContent from "@template/components/SubContent";

import useTextToSpeech from '@hooks/useTextToSpeech';

import ttsService from '@services/ttsService';

function ConfigPage() {
    const { voices, isReady, refreshProfiles, profiles } = useTextToSpeech();
    
    const [tempProfiles, setTempProfiles] = useState(profiles);

    const ptVoices = voices.filter(v => v.lang.includes('pt'));
    const enVoices = voices.filter(v => v.lang.includes('en'));

    const handleChange = (lang, field, value) => {
        setTempProfiles(prev => ({
            ...prev,
            [lang]: { ...prev[lang], [field]: value }
        }));
    };

    const handleSaveAll = () => {
        ttsService.saveProfile('pt-BR', tempProfiles['pt-BR']);
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

    if (!isReady) return <div className="p-8 text-center">Carregando sintetizador...</div>;

    return (
        <SubContent>
            <div className="rounded-2xl shadow-custom-b w-[calc(100%+1rem)] py-3">
                <div className="w-fit text-center mx-auto">
                    <p className="text-4xl text-(--secondary) mb-1">Configurações</p>
                    <div className="border-b-2 border-(--secondary) w-[50%] mx-auto" />
                </div>
            </div>
            <div className="flex w-full justify-evenly py-6">
                <ButtonAction background={"secondary-transparent"} handle={handleReset}>
                    Resetar Padrão
                </ButtonAction>
                <ButtonAction background={"tertiary-transparent"} handle={handleSaveAll}>
                    Salvar Alterações
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
        </SubContent>
    );
};

export default ConfigPage;



// Botão para mudar tema e apagar histórico.