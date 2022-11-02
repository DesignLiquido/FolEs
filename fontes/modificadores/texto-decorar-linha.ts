import { Modificador } from "./superclasse/modificador";

export class TextoDecorarLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-decorar-linha", "text-decoration-line");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
