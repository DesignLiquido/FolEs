import { Modificador } from "./superclasse/modificador";

export class LarguraFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-fim-borda-em-bloco", "border-block-end-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
