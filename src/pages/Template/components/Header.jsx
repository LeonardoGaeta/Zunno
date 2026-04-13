import ArrowIcon from '@assets/images/Vetor - Seta.svg?react';
import imageUrl from '@assets/images/generic-logo-140952.png';

import { useLocation, useNavigate } from 'react-router-dom';

function Header({ returnable }) {
    const navigate = useNavigate();
    const location = useLocation();

    const showButton = returnable || location.pathname.startsWith('/word/');

    return (
        <div
            className="w-full h-24 flex items-center justify-center shadow-custom-b relative bg-(--bg) shrink-0 banana"
        >
            {/* Seta de voltar */}
            {showButton && 
            <div
              className="absolute left-10
                transition-all duration-150
                hover:scale-110
                active:scale-100
              "
              onClick={() => navigate(-1)}
            >
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