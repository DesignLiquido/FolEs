import { Modificador } from "./superclasse/modificador";

export class BordaEsquerdaLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-esquerda", "border-left-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
