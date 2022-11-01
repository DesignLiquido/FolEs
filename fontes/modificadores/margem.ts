import { Modificador } from "./superclasse/modificador";

export class Margem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem", "margin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
