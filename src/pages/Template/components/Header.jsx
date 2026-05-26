import { useLocation, useNavigate } from 'react-router-dom';

import ArrowIcon from '@assets/images/Vetor - Seta.svg?react';
import SunIcon from '@assets/images/Vetor - Sol.svg?react';
import MoonIcon from '@assets/images/Vetor - Lua.svg?react';

import Logo from '@assets/images/logo.svg?react';

import changeThemeService from '@services/changeThemeService';
import { useState } from 'react';

function Header({ returnable }) {
    const { changeTheme, currentTheme } = changeThemeService;

    const navigate = useNavigate();
    const location = useLocation();

    const [darkThemeActivated, setDarkThemeActivated] = useState(currentTheme === "dark");

    const showButton = returnable || location.pathname.startsWith('/word/');

    const changeThemeIcon = () => {
        changeTheme();
        setDarkThemeActivated(!darkThemeActivated);
    }

    const goToSearchPage = () => {
        navigate('/');
    }

    return (
        <div
            className="w-full h-24 flex items-center justify-center shadow-custom-b relative bg-(--bg) shrink-0 banana"
        >
            {/* Back arrow */}
            {showButton && 
            <div
              className="absolute left-10
                transition-all
                hover:scale-110
                active:scale-100
              "
              onClick={() => navigate(-1)}
            >
                <ArrowIcon className="w-10 h-10 text-(--text-topper) cursor-pointer -scale-x-100" />
            </div>}

            {/* Logo */}
            <div
              className="flex justify-center items-center
                transition-all
                hover:scale-110
                active:scale-100
              "
              onClick={goToSearchPage}
            >
                <Logo className="h-20 w-auto text-(--text-topper) cursor-pointer" />
            </div>
            <div
              className='absolute right-10 text-(--text-topper) font-bold text-lg cursor-pointer transition-all duration-150'
              onClick={() => changeThemeIcon()}
            >  
            {/* Theme icon */}
            <div className='text-(--text-topper) hover:scale-110 active:scale-100 transition-all'>
              {darkThemeActivated ? <SunIcon className='w-8 h-8' /> : <MoonIcon className='w-8 h-8' />}
            </div>
            </div>
        </div>
    );
}

export default Header;