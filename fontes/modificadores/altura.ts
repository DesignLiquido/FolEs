import { Modificador } from "./superclasse/modificador";

export class Altura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("altura", "height");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
