import { Modificador } from "./superclasse/modificador";

export class TransformarCaixa extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("transformar-caixa", "transform-box");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
