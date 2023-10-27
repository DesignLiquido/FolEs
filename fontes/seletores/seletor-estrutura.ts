import { Estrutura } from "../estruturas/estrutura";
import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

export class SeletorEstrutura extends Seletor {
    estrutura: Estrutura;

    constructor(estrutura: Estrutura, pseudoclasse?: Pseudoclasse, pragmas?: PragmasSeletor) {
        super(pseudoclasse, pragmas);
        this.estrutura = estrutura;
    }

    paraTexto() {
        const nomeTag = this.estrutura.constructor.name;
        
        // Convertendo a primeira letra em minúscula
        const nomeTagFormatado = nomeTag.charAt(0).toLowerCase() + nomeTag.slice(1);

        // Convertendo as letras maiúsculas restantes para minúsculas antecedidas por hífen.
        // Desta forma, as classes em camelCase (ex.: areaTexto) viram kebab-case (area-texto)
        let resultado = nomeTagFormatado.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

        if (this.pseudoclasse !== undefined && this.pseudoclasse !== null) {
            resultado += `:${this.pseudoclasse.pseudoclasseCss}`;
        }

        return resultado;
    }
}