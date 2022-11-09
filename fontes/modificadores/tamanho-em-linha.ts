import { Modificador } from "./superclasse/modificador";

export class TamanhoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-em-linha", "inline-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
