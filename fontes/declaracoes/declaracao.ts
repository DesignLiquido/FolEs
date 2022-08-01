import { Modificador } from "../modificadores";

export class Declaracao {
    seletor: string;
    modificadores: Modificador[];

    constructor(seletor: string, modificadores: Modificador[]) {
        this.seletor = seletor;
        this.modificadores = modificadores;
    }
}
