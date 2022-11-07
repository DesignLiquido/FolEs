import { Modificador } from "./superclasse/modificador";

export class TextoBidirecional extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-bidirecional", "unicode-bidi");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
