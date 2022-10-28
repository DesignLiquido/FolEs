import { Modificador } from "./superclasse/modificador";

export class BordaEsquerdaEstilo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-esquerda-estilo", "border-left-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
