import { Modificador } from "./modificador";

export class BordaEsquerdaCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-esquerda-cor", "border-left-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
