import { Modificador } from "./superclasse/modificador";

export class TamanhoColunasEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-colunas-em-grade", "grid-auto-columns");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
