import { Modificador } from "./superclasse/modificador";

export class BordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-em-linha", "border-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
