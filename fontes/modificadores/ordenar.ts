import { Modificador } from "./superclasse/modificador";

export class Ordenar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("ordenar", "order");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
