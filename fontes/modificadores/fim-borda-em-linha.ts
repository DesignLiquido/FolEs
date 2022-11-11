import { Modificador } from "./superclasse/modificador";

export class FimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-borda-em-linha", "border-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
