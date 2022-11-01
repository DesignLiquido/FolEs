import { Modificador } from "./superclasse/modificador";

export class GradeFluxo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-fluxo", "grid-auto-flow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
