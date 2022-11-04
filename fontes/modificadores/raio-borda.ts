import { Modificador } from "./superclasse/modificador";

export class RaioBorda extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("raio-borda", "border-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
