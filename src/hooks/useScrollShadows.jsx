import { useState, useCallback } from "react";


function useScrollShadows() {
    const [shadows, setShadows] = useState({top: false, bottom: false});

    const handleScroll = useCallback((el) => {
        if (!el.target) return;

        const { scrollTop, scrollHeight, clientHeight } = el.target;
        const isScrollable = scrollHeight > clientHeight;

        setShadows({
            top: isScrollable && scrollTop > 5,
            bottom: isScrollable && scrollTop + clientHeight < scrollHeight - 5,
        });
        console.log(scrollTop);
    }, []);


    return { shadows, handleScroll };
}

export default useScrollShadows;