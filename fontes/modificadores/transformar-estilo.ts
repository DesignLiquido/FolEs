import { Modificador } from "./superclasse/modificador";

export class TransformarEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("transformar-estilo", "transform-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
