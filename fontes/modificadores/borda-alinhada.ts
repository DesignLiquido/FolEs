import { Modificador } from "./superclasse/modificador";

export class BordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-alinhada", "border-inline");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
