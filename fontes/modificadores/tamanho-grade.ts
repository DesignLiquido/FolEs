import { Modificador } from "./superclasse/modificador";

export class TamanhoGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-grade", "grid-area");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
