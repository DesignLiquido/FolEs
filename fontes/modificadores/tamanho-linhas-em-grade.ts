import { Modificador } from "./superclasse/modificador";

export class TamanhoLinhasEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-linhas-em-grade", "grid-auto-rows");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
