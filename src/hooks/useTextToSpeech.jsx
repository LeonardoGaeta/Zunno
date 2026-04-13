import EasySpeech from "easy-speech";
import { useCallback, useEffect, useState } from "react";
import ttsService from "@services/ttsService";



function useTextToSpeech() {
    const [isReady, setIsReady] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState([]);
    const [profiles, setProfiles] = useState(ttsService.getAllProfiles());

    useEffect(() => {
        const initSpeech = async () => {
            try {
                await EasySpeech.init(5000, 250);

                const allVoices = EasySpeech.voices();
                setVoices(allVoices);
                setIsReady(true);

                console.debug("EasySpeech está pronto");
            } catch (err) {
                console.error("Erro ao inicializar EasySpeech:", err);
            }
        }

        initSpeech();
    }, []);

    const refreshProfiles = () => setProfiles(ttsService.getAllProfiles());

    const speak = useCallback(async (text, lang = "en-US", override = {}) => {
        if (!isReady) {
            console.warn("EasySpeech ainda não está pronto");
            return;
        }

        EasySpeech.cancel();
        if (isSpeaking) {
            setIsSpeaking(false);
            return;
        }

        setIsSpeaking(true);

        const activeProfile = profiles[lang] || profiles['en-US'];

        const selectedVoice = 
            voices.find(v => v.voiceURI === activeProfile.voiceURI)
            || EasySpeech.filterVoices({ language: 'en-US' })[0]
            || voices[0];

        try {
            await EasySpeech.speak({
                text,
                voice: selectedVoice,
                pitch: override.pitch ?? activeProfile.pitch,
                rate: override.rate ?? activeProfile.rate,
                volume: override.volume ?? activeProfile.volume
            });

            setIsSpeaking(false);
        } catch (err) {
            if (err?.error !== "interrupted") console.error("Erro ao tentar falar: ", err);
        } finally {
            setIsSpeaking(false);
        }
    }, [isReady, isSpeaking, profiles]);

    return { speak, voices, isReady, isSpeaking, profiles, refreshProfiles};
}

export default useTextToSpeech;