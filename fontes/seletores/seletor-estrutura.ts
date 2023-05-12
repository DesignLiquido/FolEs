import { Estrutura } from "../estruturas/estrutura";
import { Seletor } from "./seletor";

export class SeletorEstrutura extends Seletor {
    estrutura: Estrutura;

    constructor(estrutura: Estrutura) {
        super();
        this.estrutura = estrutura;
    }

    paraTexto() {
        return this.estrutura.constructor.name.toLowerCase();
    }
}