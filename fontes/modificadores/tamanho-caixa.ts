import { Modificador } from "./superclasse/modificador";

export class TamanhoCaixa extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-caixa", "box-sizing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
