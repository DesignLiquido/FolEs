import { Modificador } from "./superclasse/modificador";

export class TransformarOrigem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("transformar-origem", "transform-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
