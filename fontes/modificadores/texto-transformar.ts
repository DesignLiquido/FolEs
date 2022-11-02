import { Modificador } from "./superclasse/modificador";

export class TextoTransformar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-transformar", "text-transform");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
