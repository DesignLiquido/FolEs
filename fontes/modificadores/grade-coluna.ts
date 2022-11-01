import { Modificador } from "./superclasse/modificador";

export class GradeColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-coluna", "grid-column");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
