

function Botao({ isReady = true, isActive, onClick, children }) {
    return(
        <button
          className={`${!isActive 
              ? 'bg-(--icon-btn-secondary) [&>svg]:fill-(--icon-btn-secondary) [&>svg>path]:stroke-(--icon-btn-tertiary)'
              : 'bg-(--icon-btn-secondary) [&>svg]:fill-(--icon-btn-tertiary) [&>svg>path]:stroke-(--icon-btn-secondary) [&>svg>path:first-child]:stroke-(--icon-btn-tertiary)'
            } 
            
            p-3 rounded-full cursor-pointer
            transition-all duration-150
            [&>svg>path]:transition-[stroke] [&>svg>path]:duration-150
            hover:scale-110
            active:bg-(--icon-btn-tertiary) active:[&>svg]:fill-(--icon-btn-tertiary) active:[&>svg>path]:stroke-(--icon-btn-secondary)
          `}
          disabled={!isReady}
          onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Botao;