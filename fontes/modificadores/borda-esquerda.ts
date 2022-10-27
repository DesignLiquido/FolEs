import { Modificador } from "./modificador";

export class BordaEsquerda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-esquerda", "border-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
