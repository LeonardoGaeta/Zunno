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

    return (
        <div className="p-6 rounded-2xl my-4 space-y-6">
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
                        <span className="">
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

            <div>
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

            <div>
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

export default LanguageSection;