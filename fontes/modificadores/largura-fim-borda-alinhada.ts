import { Modificador } from "./superclasse/modificador";

export class LarguraFimBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-fim-borda-alinhada", "border-inline-end-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
