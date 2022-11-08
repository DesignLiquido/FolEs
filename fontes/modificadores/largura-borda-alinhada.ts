import { Modificador } from "./superclasse/modificador";

export class LarguraBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-borda-alinhada", "border-inline-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
