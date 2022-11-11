import { Modificador } from "./superclasse/modificador";

export class LarguraFimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-fim-borda-em-linha", "border-inline-end-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
