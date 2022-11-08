import { Modificador } from "./superclasse/modificador";

export class LarguraBordaBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-bloco", "border-block-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
