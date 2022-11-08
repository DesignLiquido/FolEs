import { Modificador } from "./superclasse/modificador";

export class FimBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-borda-bloco", "border-block-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
