import { Modificador } from "./superclasse/modificador";

export class LinhaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("linha-em-grade", "grid-row");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
