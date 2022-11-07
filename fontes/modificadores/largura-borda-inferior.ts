import { Modificador } from "./superclasse/modificador";

export class LarguraBordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-inferior", "border-bottom-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
