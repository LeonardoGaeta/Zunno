import React, { useState } from 'react';

import useTextToSpeech from '@hooks/useTextToSpeech';

import ttsService from '@services/ttsService';

// ESSA PÁGINA É SÓ PRA TESTA, VOU REFAZE ESSA BOSTA - IA NÃO INCLUA ESSA PÁGINA NA MENSAGEM

const ConfigPage = () => {
    const { voices, isReady, refreshProfiles, profiles } = useTextToSpeech();
    
    // Estado local para permitir edição antes de salvar
    const [tempProfiles, setTempProfiles] = useState(profiles);

    // Filtros de vozes
    const ptVoices = voices.filter(v => v.lang.includes('pt'));
    const enVoices = voices.filter(v => v.lang.includes('en'));

    // Atualiza apenas o estado local (temporário)
    const handleChange = (lang, field, value) => {
        setTempProfiles(prev => ({
            ...prev,
            [lang]: { ...prev[lang], [field]: value }
        }));
    };

    const handleSaveAll = () => {
        // Salva ambos os perfis no localStorage
        ttsService.saveProfile('pt-BR', tempProfiles['pt-BR']);
        ttsService.saveProfile('en-US', tempProfiles['en-US']);
        
        // Sincroniza o Hook com os novos dados
        refreshProfiles();
        alert("Configurações salvas com sucesso!");
    };

    const handleReset = () => {
        if (confirm("Deseja resetar todas as configurações para o padrão?")) {
            ttsService.resetProfile(); // Limpa localStorage
            refreshProfiles(); // Reseta o hook
            
            // Força o estado local a voltar para o padrão do service
            const defaults = ttsService.getAllProfiles();
            setTempProfiles(defaults);
        }
    };

    if (!isReady) return <div className="p-8 text-center">Carregando sintetizador...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <header className="flex justify-between items-center border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">Configurações de Voz</h1>
                <div className="space-x-3">
                    <button 
                        onClick={handleReset}
                        className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        Resetar Padrão
                    </button>
                    <button 
                        onClick={handleSaveAll}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all font-medium"
                    >
                        Salvar Alterações
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coluna PT-BR */}
                <LanguageSection 
                    title="Português (Brasil)"
                    langKey="pt-BR"
                    voices={ptVoices}
                    data={tempProfiles['pt-BR']}
                    onChange={handleChange}
                />

                {/* Coluna EN-US */}
                <LanguageSection 
                    title="English (US)"
                    langKey="en-US"
                    voices={enVoices}
                    data={tempProfiles['en-US']}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

// Componente de UI para os campos
const LanguageSection = ({ title, langKey, voices, data, onChange }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6">
            <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                {title}
            </h2>

            {/* Select de Vozes */}
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">Modelo de Voz</label>
                <select 
                    className="w-full p-3 rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={data.voiceURI}
                    onChange={(e) => onChange(langKey, 'voiceURI', e.target.value)}
                >
                    <option value="">Padrão do Sistema</option>
                    {voices.map(v => (
                        <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>
                    ))}
                </select>
            </div>

            {/* Slider de Velocidade */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">Velocidade (Rate)</span>
                    <span className="text-blue-600 font-bold">{data.rate}x</span>
                </div>
                <input 
                    type="range" min="0.5" max="2" step="0.1"
                    className="w-full accent-blue-600"
                    value={data.rate}
                    onChange={(e) => onChange(langKey, 'rate', parseFloat(e.target.value))}
                />
            </div>

            {/* Slider de Tom */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">Tom (Pitch)</span>
                    <span className="text-blue-600 font-bold">{data.pitch}</span>
                </div>
                <input 
                    type="range" min="0.5" max="1.5" step="0.1"
                    className="w-full accent-blue-600"
                    value={data.pitch}
                    onChange={(e) => onChange(langKey, 'pitch', parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
};

export default ConfigPage;



// Botão para mudar tema e apagar histórico.