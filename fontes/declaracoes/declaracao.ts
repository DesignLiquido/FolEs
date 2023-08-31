import { Modificador } from "../modificadores";
import { Seletor } from "../seletores/seletor";

export class Declaracao {
    seletores: Seletor[];
    modificadores: Modificador[];
    declaracoesAninhadas: Declaracao[];
    espacoReservado?: string;

    constructor(
        seletores: Seletor[], 
        modificadores: Modificador[], 
        declaracoesAninhadas: Declaracao[],
        espacoReservado: string = null
    ) {
        this.seletores = seletores;
        this.modificadores = modificadores;
        this.declaracoesAninhadas = declaracoesAninhadas;
        this.espacoReservado = espacoReservado;
    }
}
