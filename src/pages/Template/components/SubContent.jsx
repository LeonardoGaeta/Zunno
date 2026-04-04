

function SubContent({ children }) {
    return (
        <div className="bg-(--bg) p-2 rounded-2xl flex flex-col items-center">
            {children}
        </div>
    )
}

export default SubContent;