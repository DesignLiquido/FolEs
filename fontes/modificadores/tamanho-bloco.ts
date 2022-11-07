import { Modificador } from "./superclasse/modificador";

export class TamanhoBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-bloco", "box-sizing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
