import { useEffect, useRef } from "react";

import useScrollShadows from "@hooks/useScrollShadows";

function Content({ children }) {
    const scrollRef = useRef(null);
    const { shadows, handleScroll } = useScrollShadows();

    useEffect(() => {
        requestAnimationFrame(handleScroll);
    }, [children, handleScroll]);

    return(
        <div className="relative flex-1 min-h-0 bg-(--primary) rounded-2xl shadow-custom-b flex justify-center mx-4 my-5 overflow-hidden z-0">
            <div className={`fade-top pointer-events-none transition-opacity duration-300 ${shadows.top ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`fade-bottom pointer-events-none transition-opacity duration-300 ${shadows.bottom    ? 'opacity-100' : 'opacity-0'}`} />
            
            <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={`
              relative bananilsonwilson
              w-full max-w-4xl px-3 py-4
              overflow-y-auto no-scrollbar
              transition-all duration-200
            `}
            >
            {children}
            </div>
        </div>
    );
}

export default Content;