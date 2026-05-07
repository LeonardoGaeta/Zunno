

function Botao({ isReady = true, isActive, onClick, children }) {
    return(
        <button
          className={`${!isActive 
              ? 'bg-(--secondary) [&>svg]:fill-(--secondary) [&>svg>path]:stroke-(--tertiary)'
              : 'bg-(--secondary) [&>svg]:fill-(--tertiary) [&>svg>path]:stroke-(--secondary) [&>svg>path:first-child]:stroke-(--tertiary)'
            } 
            
            p-3 rounded-full cursor-pointer
            transition-all duration-150
            [&>svg>path]:transition-[stroke] [&>svg>path]:duration-150
            hover:scale-110
            active:bg-(--tertiary) active:[&>svg]:fill-(--tertiary) active:[&>svg>path]:stroke-(--secondary)
          `}
          disabled={!isReady}
          onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Botao;