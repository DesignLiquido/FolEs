import { Estrutura } from "../estruturas/lmht/estrutura";
import { Seletor } from "./seletor";

export class SeletorEstrutura extends Seletor {
    estrutura: Estrutura;

    constructor(estrutura: Estrutura) {
        super();
        this.estrutura = estrutura;
    }
}