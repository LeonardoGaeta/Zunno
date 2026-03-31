import InfoIcon from "../../../../assets/footerBtns/Vetor - Info.svg?react";
import GlossaryIcon from "../../../../assets/footerBtns/Vetor - Glossaario.svg?react";
import SearchIcon from "../../../../assets/footerBtns/Vetor - Pesquisar.svg?react";
import TranslateIcon from "../../../../assets/footerBtns/Vetor - Pesquisar.svg?react";
import ConfigIcon from "../../../../assets/footerBtns/Vetor - Configurações.svg?react";

import Botao from "./Botao";

function Footer() {
    return (
        <div className="w-full h-24 flex flex-wrap items-center justify-around px-4 sticky bottom-0 shadow-custom-b bg-(--secondary)">
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