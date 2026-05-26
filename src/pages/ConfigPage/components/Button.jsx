function ButtonAction({ background, handle, children: texto }) {
  const backgrounds = {
    "secondary-transparent": "bg-(--secondary-transparent)",
    "tertiary-transparent": "bg-(--tertiary-transparent)",
    "black-transparent": "bg-(--black-transparent-2)",
  }

    return (
        <div 
          className={`
            cursor-pointer w-full text-center
            flex items-center justify-center select-none
            ${backgrounds[background]} text-(--word-text-color)
            py-2 px-4 rounded-2xl
            shadow-custom-b
            transition-all

            hover:scale-110 hover:text-(--text-topper)
          `}
          onClick={handle}
        >
            {texto}
        </div>
    );
}

export default ButtonAction;