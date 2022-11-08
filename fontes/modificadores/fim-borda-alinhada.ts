import { Modificador } from "./superclasse/modificador";

export class FimBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fim-borda-alinhada", "border-inline-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
