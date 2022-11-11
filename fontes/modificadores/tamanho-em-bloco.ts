import { Modificador } from "./superclasse/modificador";

export class TamanhoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-em-bloco", "block-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
