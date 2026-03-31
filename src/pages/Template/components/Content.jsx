

function Content({ children }) {
    return(
        <div className="flex-1 bg-(--primary) rounded-2xl shadow-custom-b overflow-y-auto flex justify-center mx-4 my-5">
            <div className="w-full max-w-4xl px-3 py-4">
                {children}
            </div>
        </div>
    );
}

export default Content;