import { Modificador } from "./superclasse/modificador";

export class TextoDecorar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-decorar", "text-decoration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
