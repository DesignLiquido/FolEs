import { Modificador } from "../modificadores";

export class Declaracao {
    seletor: string;
    modificadores: Modificador[];
    placeholder?: string;

    constructor(seletor: string, modificadores: Modificador[], placeholder: string = null) {
        this.seletor = seletor;
        this.modificadores = modificadores;
        this.placeholder = placeholder;
    }
}
