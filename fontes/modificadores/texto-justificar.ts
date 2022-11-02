import { Modificador } from "./superclasse/modificador";

export class TextoJustificar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-justificar", "text-justify");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
