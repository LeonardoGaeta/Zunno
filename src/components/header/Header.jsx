import BackIcon from '../../assets/Vetor - Voltar.svg?react';

function Header() {
    return (
        <div className="w-full h-28 bg-(--bg) flex items-center justify-center shadow-custom">
            <BackIcon className="w-6 h-6" color="#000" />
            <div className="">
                <img src="../../assets/generic-logo-140952.png" alt="" />
            </div>
        </div>
    );
}

export default Header;  