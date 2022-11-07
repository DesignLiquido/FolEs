import { Modificador } from "./superclasse/modificador";

export class TransformarTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("transformar-texto", "text-transform");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
