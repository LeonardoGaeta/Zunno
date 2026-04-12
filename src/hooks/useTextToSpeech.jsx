import EasySpeech from "easy-speech";
import { useCallback, useEffect, useState } from "react";



function useTextToSpeech() {
    const [isReady, setIsReady] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState([]);

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

    const speak = useCallback(async (text, voiceConfig = {}) => {
        if (!isReady) {
            console.warn("EasySpeech ainda não está pronto");
            return;
        }

        EasySpeech.cancel();

        if (isSpeaking) {
            EasySpeech.cancel();
            setIsSpeaking(false);
            return;
        }

        setIsSpeaking(true);

        const defaultVoice = EasySpeech.filterVoices({ language: 'en-US' })[0];

        try {
            await EasySpeech.speak({
                text,
                voice: voiceConfig.voice || defaultVoice,
                pitch: voiceConfig.pitch || 1,
                rate: voiceConfig.rate || 1,
                volume: voiceConfig.volume || 1
            });

            setIsSpeaking(false);
        } catch (err) {
            setIsSpeaking(false);

            if (err && err.error === "interrupted") return;

            console.error("Erro ao tentar falar: ", err);
        }
    }, [isReady, isSpeaking]);

    return { speak, voices, isReady, isSpeaking };
}

export default useTextToSpeech;