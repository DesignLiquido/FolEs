import { Modificador } from "./superclasse/modificador";

export class GradeModeloGeral extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-modelo-geral", "grid-template-areas");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
