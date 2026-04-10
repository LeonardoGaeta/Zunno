import InfoIcon from "@assets/images/footerBtns/Vetor - Info.svg?react";
import GlossaryIcon from "@assets/images/footerBtns/Vetor - Glossaario.svg?react";
import SearchIcon from "@assets/images/footerBtns/Vetor - Pesquisar.svg?react";
import TranslateIcon from "@assets/images/footerBtns/Vetor - Tradutor 3.svg?react";
import ConfigIcon from "@assets/images/footerBtns/Vetor - Configurações.svg?react";

import Botao from "./Botao";

function Footer() {
    return (
        <div className="
            w-full min-h-24 flex flex-nowrap items-center justify-around 
            px-4 sticky bottom-0 shadow-custom-s bg-(--secondary) shrink-0
        ">
            <Botao rota={'/info'}>
                <InfoIcon className="w-10 h-10 max-h-full" />
            </Botao>
            <Botao rota={'/glossary'}>
                <GlossaryIcon className="w-10 h-10 max-h-full" />
            </Botao>
            <Botao rota={'/'}>
                <SearchIcon className="w-10 h-10 max-h-full" />
            </Botao>
            <Botao rota={'/translate'}>
                <TranslateIcon className="w-10 h-10 max-h-full" />
            </Botao>
            <Botao rota={'/configuration'}>
                <ConfigIcon className="w-10 h-10 max-h-full" />
            </Botao>
        </div>
    );
}

export default Footer;