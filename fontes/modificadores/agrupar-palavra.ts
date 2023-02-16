import { Modificador } from "./superclasse/modificador";

export class AgruparPalavra extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("agrupar-palavra", "word-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
