import { Modificador } from "./superclasse/modificador";

export class GradeFimColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-fim-coluna", "grid-column-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
