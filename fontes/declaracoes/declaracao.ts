import { Modificador } from "../modificadores";
import { Seletor } from "../seletores/seletor";

export class Declaracao {
    seletores: Seletor[];
    modificadores: Modificador[];
    espacoReservado?: string;

    constructor(seletores: Seletor[], modificadores: Modificador[], espacoReservado: string = null) {
        this.seletores = seletores;
        this.modificadores = modificadores;
        this.espacoReservado = espacoReservado;
    }
}
