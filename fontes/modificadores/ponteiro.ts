import { Modificador } from "./superclasse/modificador";

export class Ponteiro extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ponteiro", "pointer-events");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
