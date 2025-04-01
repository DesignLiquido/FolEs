import { Modificador } from "../modificadores";
import { Seletor } from "../seletores/seletor";
import { Declaracao } from "./declaracao";

export class BlocoDeclaracao extends Declaracao {
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
        super();
        this.seletores = seletores;
        this.modificadores = modificadores;
        this.declaracoesAninhadas = declaracoesAninhadas;
        this.espacoReservado = espacoReservado;
    }
}
