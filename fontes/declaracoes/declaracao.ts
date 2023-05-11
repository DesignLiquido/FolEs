import { Modificador } from "../modificadores";

export class Declaracao {
    seletor: string;
    modificadores: Modificador[];
    espacoReservado?: string;

    constructor(seletor: string, modificadores: Modificador[], placeholder: string = null) {
        this.seletor = seletor;
        this.modificadores = modificadores;
        this.espacoReservado = placeholder;
    }
}
