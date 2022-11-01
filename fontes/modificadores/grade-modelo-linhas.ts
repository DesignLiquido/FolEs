import { Modificador } from "./superclasse/modificador";

export class GradeModeloLinhas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-modelo-linhas", "grid-template-rows");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
