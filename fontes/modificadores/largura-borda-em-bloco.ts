import { Modificador } from "./superclasse/modificador";

export class LarguraBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-em-bloco", "border-block-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
