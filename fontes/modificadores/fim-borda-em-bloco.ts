import { Modificador } from "./superclasse/modificador";

export class FimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-borda-em-bloco", "border-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
