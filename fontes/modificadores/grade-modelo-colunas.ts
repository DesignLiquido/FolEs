import { Modificador } from "./superclasse/modificador";

export class GradeModeloColunas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-modelo-colunas", "grid-template-columns");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
