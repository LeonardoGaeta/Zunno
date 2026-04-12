import ArrowIcon from '@assets/images/Vetor - Seta.svg?react';
import imageUrl from '@assets/images/generic-logo-140952.png';

function Header({ returnable }) {
    return (
        <div
            className="w-full h-24 flex items-center justify-center shadow-custom-b relative bg-(--bg) shrink-0 banana"
        >
            {/* Seta de voltar */}
            {returnable && 
            <div className="absolute left-10">
                <ArrowIcon className="w-10 h-10 color-(--primary) cursor-pointer -scale-x-100" />
            </div>}

            {/* Logo / Tenho que ajustar ela ainda */}
            <div className="flex justify-center items-center">
                <img className="h-20 w-auto" src={imageUrl} alt="Logo" />
            </div>
        </div>
    );
}

export default Header;