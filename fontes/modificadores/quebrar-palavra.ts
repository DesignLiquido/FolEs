import { Modificador } from "./superclasse/modificador";

export class QuebrarPalavra extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("quebrar-palavra", "word-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
