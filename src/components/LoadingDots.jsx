import { useEffect, useState } from "react";

function LoadingDots() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => {
                if (prev === "...") return "";
                return prev + ".";
            })
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block text-left w-8">{dots}</span>
    );
}

export default LoadingDots;