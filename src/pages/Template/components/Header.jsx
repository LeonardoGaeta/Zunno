import BackIcon from '../../../assets/Vetor - Voltar.svg?react';
import imageUrl from '../../../assets/generic-logo-140952.png';

function Header({ returnable }) {
    return (
        <div
            className="w-full h-24 flex items-center justify-center shadow-custom-s relative bg-(--bg)"
        >
            <div className="absolute left-10">
                <BackIcon className="w-10 h-10 color-(--primary) cursor-pointer" />
            </div>

            <div className="flex justify-center items-center">
                <img className="h-20 w-auto" src={imageUrl} alt="Logo" />
            </div>
        </div>
    );
}

export default Header;