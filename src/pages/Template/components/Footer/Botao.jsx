import { NavLink } from "react-router-dom";

function Botao({ rota, children }) {
    return (
        <NavLink to={rota} className="relative w-20 h-24 flex justify-center items-center">
            {({ isActive }) => (
                <>
                    {/* Círculo Maior */}
                    <div className={`
                        absolute w-24 h-24 rounded-full bg-(--secondary) shadow-custom-s
                        transition-all duration-500 ease-out z-10
                        ${isActive ? "-translate-y-8 opacity-100" : "translate-y-0 opacity-0"}
                    `} />

                    {/* Retângulo Cobridor de Sombras */}
                    <div className={`
                        absolute bottom-0 w-24 h-24 bg-(--secondary) 
                        transition-opacity duration-300 pointer-events-none z-20
                        ${isActive ? "opacity-100" : "opacity-0"}
                    `} />

                    {/* Círculo Circulo Menor */}
                    <div className={`
                        absolute w-18 h-18 rounded-full bg-(--tertiary)
                        flex items-center justify-center
                        transition-all duration-500 ease-out z-30
                        ${isActive 
                            ? "-translate-y-8 opacity-100 text-(--secondary)" // Cor do ícone quando ATIVO
                            : "translate-y-0 opacity-0"
                        }
                    `}>
                        {children}
                    </div>

                    {/* Children (Inativo) */}
                    {!isActive && (
                        <div className="z-0 text-(--tertiary) transition-colors duration-300"> 
                            {children}
                        </div>
                    )}
                </>
            )}
        </NavLink>
    );
}

export default Botao;