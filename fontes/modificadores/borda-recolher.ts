import { Modificador } from "./superclasse/modificador";

export class BordaRecolher extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-recolher", "border-collapse");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
