import { Modificador } from "./superclasse/modificador";

export class TextoDecorarEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-decorar-estilo", "text-decoration-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
