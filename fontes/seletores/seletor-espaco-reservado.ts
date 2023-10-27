import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

/**
 * Não deve ser impresso em CSS.
 */
export class SeletorEspacoReservado extends Seletor {
    nome: string;

    constructor(nome: string, pragmas?: PragmasSeletor) {
        super(undefined, pragmas);
        this.nome = nome;
    }

    paraTexto() {
        return "";
    }
}