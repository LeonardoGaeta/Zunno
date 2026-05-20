

function LanguageSection ({ langKey, voices, data, onChange }) {
    return (
        <div className="p-6 rounded-2xl my-4 space-y-6">
            <div className="space-y-2">
                <label className="text-2xl font-semibold text-(--secondary)">Modelo de Voz</label>
                <div className="relative">
                    <select 
                      className="
                        w-full p-3 rounded-2xl

                        bg-(--extra-2)
                        text-(--secondary)

                        border border-(--secondary-transparent)

                        shadow-custom-b

                        outline-none
                        appearance-none
                        cursor-pointer

                        transition-all

                        hover:bg-(--secondary-transparent)
                        hover:border-(--secondary)

                        focus:ring-5 focus:ring-(--secondary-transparent)
                        focus:border-(--secondary)
                      "
                      value={data.voiceURI}
                      onChange={(e) => onChange(langKey, 'voiceURI', e.target.value)}
                    >
                    <option
                      value=""
                      className="
                      "
                    >Padrão do Sistema</option>
                    {voices.map(v => (
                        <option
                          key={v.voiceURI}
                          value={v.voiceURI}
                          className="
                          "
                        >
                        {v.name}
                        </option>
                    ))}
                    </select>
                    <span className="
                      pointer-events-none
                      absolute right-4 top-1/2 -translate-y-1/2
                      text-(--secondary)
                    ">
                        ▾
                    </span>
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