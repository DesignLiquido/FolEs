import { Modificador } from "./superclasse/modificador";

export class LarguraBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-em-linha", "border-inline-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
