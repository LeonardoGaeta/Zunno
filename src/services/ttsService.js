const STORAGE_KEY = "tts_profiles_config";

const DEFAULT_SETTINGS = {
    "pt-BR": {
        voiceURI: "",
        pitch: 1,
        rate: 1,
        volume: 1,
    },
    "en-US": {
        voiceURI: "",
        pitch: 1,
        rate: 1,
        volume: 1,
    }
};

const ttsService = {
    getAllProfiles: () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    },

    getProfileByLang: (lang) => {
        const profiles = ttsService.getAllProfiles();
        return profiles[lang] || DEFAULT_SETTINGS['en-US'];
    },

    saveProfile: (lang, settings) => {
        const all = ttsService.getAllProfiles();
        all[lang] = { ...all[lang], ...settings };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        return all;
    },

    resetProfile: () => {
        localStorage.removeItem(STORAGE_KEY);
    }
}

export default ttsService;