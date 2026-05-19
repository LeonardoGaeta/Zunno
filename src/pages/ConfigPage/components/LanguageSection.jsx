

function LanguageSection ({ langKey, voices, data, onChange }) {
    return (
        <div className="p-6 rounded-2xl my-4 space-y-6">
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