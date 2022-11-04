import { Modificador } from "./superclasse/modificador";

export class FimLinhaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-linha-em-grade", "grid-row-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
