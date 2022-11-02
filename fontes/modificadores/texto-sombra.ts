import { Modificador } from "./superclasse/modificador";

export class TextoSombra extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-sombra", "text-shadow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
