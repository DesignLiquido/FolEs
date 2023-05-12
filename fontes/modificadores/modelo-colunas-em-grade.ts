import { Modificador, PragmasModificador } from "./superclasse";

export class ModeloColunasEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modelo-colunas-em-grade", "grid-template-columns");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
