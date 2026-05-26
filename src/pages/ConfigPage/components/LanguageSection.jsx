import { useState, useRef, useEffect } from "react";

function LanguageSection ({ langKey, voices, data, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const selectedVoice = voices.find(v => v.voiceURI === data.voiceURI);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Classe base reutilizável para os sliders ficarem bonitões e consistentes nos navegadores
    const sliderClassName = `
        w-full h-2 rounded-lg appearance-none cursor-pointer
        bg-(--secondary-transparent) 
        accent-(--tertiary)
        
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-5
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-(--secondary)
        hover:[&::-webkit-slider-thumb]:bg-(--secondary-light)
        hover:[&::-webkit-slider-thumb]:scale-110
        active:[&::-webkit-slider-thumb]:scale-80

        [&::-webkit-slider-thumb]:shadow-md
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:hover:scale-115
        [&::-webkit-slider-thumb]:active:scale-95

        [&::-moz-range-thumb]:w-5
        [&::-moz-range-thumb]:h-5
        [&::-moz-range-thumb]:border-0
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-(--tertiary)
        [&::-moz-range-thumb]:shadow-md
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:hover:scale-115
        [&::-moz-range-thumb]:active:scale-95
        
        focus:outline-none
    `;

    return (
        <div className="p-6 rounded-2xl mt-4 space-y-6 select-none">
            <div className="space-y-2">
                <label className="text-2xl font-semibold text-(--secondary)">Modelo de Voz</label>
                <div className="relative" ref={ref}>
                    <button
                      type="button"
                      onClick={() => setOpen(v => !v)}
                      className="
                         w-full p-3 rounded-2xl
                         flex items-center justify-between gap-6

                         text-(--secondary)
                         bg-(--extra-2)

                         border border-(--secondary-transparent)

                         shadow-custom-b

                         transition-all

                         hover:bg-(--secondary-transparent)
                         hover:border-(--secondary)

                         focus:ring-4 focus:ring-(--secondary-transparent)
                         focus:outline-none
                         cursor-pointer
                      "
                    >
                        <span>
                            {selectedVoice ? selectedVoice.name : "Padrão do Sistema"}
                        </span>
                        <span>
                            ▾
                        </span>
                    </button>
                    {open && (
                        <div
                          className="
                            absolute z-50 mt-2 w-full

                            rounded-2xl
                            bg-(--bg)
                            text-(--secondary)

                            border border-(--secondary-transparent)

                            shadow-custom-sb

                            max-h-60 overflow-auto
                          "
                        >
                            <div
                              onClick={() =>{
                                onChange(langKey, "voiceURI", "");
                                setOpen(false);
                              }}
                              className="
                                p-3 cursor-pointer
                                hover:bg-(--secondary-transparent)
                                transition
                              "
                            >
                                Padrão do Sistema
                            </div>
                            {voices.map(v => (
                                <div
                                  key={v.voiceURI}
                                  onClick={() => {
                                    onChange(langKey, "voiceURI", v.voiceURI);
                                    setOpen(false);
                                  }}
                                  className="
                                    p-3 cursor-pointer
                                    hover:bg-(--secondary-transparent)
                                    transition
                                  "
                                >
                                    {v.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-medium text-(--secondary)">Velocidade (Rate)</span>
                    <span className="text-sm font-bold bg-(--extra-2) text-(--text-topper) px-3 py-1 rounded-full shadow-xs">
                        {data.rate}x
                    </span>
                </div>
                <div className="relative flex items-center">
                    <input 
                        type="range" min="0.5" max="2" step="0.1"
                        className={sliderClassName}
                        value={data.rate}
                        onChange={(e) => onChange(langKey, 'rate', parseFloat(e.target.value))}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-medium text-(--secondary)">Tom (Pitch)</span>
                    <span className="text-sm font-bold bg-(--extra-2) text-(--text-topper) px-3 py-1 rounded-full shadow-xs">
                        {data.pitch}
                    </span>
                </div>
                <div className="relative flex items-center">
                    <input 
                        type="range" min="0.5" max="1.5" step="0.1"
                        className={sliderClassName}
                        value={data.pitch}
                        onChange={(e) => onChange(langKey, 'pitch', parseFloat(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
};

export default LanguageSection;