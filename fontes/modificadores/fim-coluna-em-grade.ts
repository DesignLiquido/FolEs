import { Modificador } from "./superclasse/modificador";

export class FimColunaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-coluna-em-grade", "grid-column-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
