import { Estrutura } from "../estruturas/estrutura";
import { Pseudoclasse } from "../pseudoclasses/pseudoclasse";
import { Seletor } from "./seletor";

export class SeletorEstrutura extends Seletor {
    estrutura: Estrutura;

    constructor(estrutura: Estrutura, pseudoclasse?: Pseudoclasse) {
        super(pseudoclasse);
        this.estrutura = estrutura;
    }

    paraTexto() {
        let resultado = this.estrutura.constructor.name.toLowerCase();
        if (this.pseudoclasse !== undefined && this.pseudoclasse !== null) {
            resultado += `:${this.pseudoclasse.pseudoclasseCss}`;
        }

        return resultado;
    }
}