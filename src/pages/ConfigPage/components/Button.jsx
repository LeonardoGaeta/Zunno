

function ButtonAction({ background, handle, children: texto }) {
    return (
        <div 
          className={`
            cursor-pointer
            bg-(--${background}) text-(--word-text-color)
            py-2 px-4 rounded-2xl
            shadow-custom-b
          `}

          onClick={() => handle()}
        >
            {texto}
        </div>
    );
}

export default ButtonAction;