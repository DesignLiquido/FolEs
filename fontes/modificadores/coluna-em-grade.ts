import { Modificador } from "./superclasse/modificador";

export class ColunaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-em-grade", "grid-column");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
