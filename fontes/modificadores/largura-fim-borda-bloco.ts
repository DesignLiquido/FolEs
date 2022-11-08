import { Modificador } from "./superclasse/modificador";

export class LarguraFimBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-fim-borda-bloco", "border-block-end-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
