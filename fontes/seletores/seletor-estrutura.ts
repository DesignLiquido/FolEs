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
        return this.estrutura.constructor.name.toLowerCase();
    }
}