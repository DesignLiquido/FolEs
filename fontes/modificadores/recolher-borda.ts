import { Modificador } from "./superclasse/modificador";

export class RecolherBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recolher-borda", "border-collapse");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
