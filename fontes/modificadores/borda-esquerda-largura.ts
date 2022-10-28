import { Modificador } from "./superclasse/modificador";

export class BordaEsquerdaLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-esquerda-largura", "border-left-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
