import { PragmasSeletor } from "./pragmas-seletor";
import { Seletor } from "./seletor";

/**
 * Não deve ser impresso em CSS.
 */
export class SeletorEspacoReservado extends Seletor {
    nome: string;
    pragmas?: PragmasSeletor;

    constructor(nome: string, pragmas?: PragmasSeletor) {
        super(undefined);
        this.nome = nome;
        this.pragmas = pragmas;
    }

    paraTexto() {
        return "";
    }
}