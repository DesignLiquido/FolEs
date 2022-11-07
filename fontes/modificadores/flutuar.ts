import { Modificador } from "./superclasse/modificador";

export class Flutuar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("flutuar", "float");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
