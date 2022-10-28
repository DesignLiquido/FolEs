import { Modificador } from "./superclasse/modificador";

export class FonteTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-texto", "font-family");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
