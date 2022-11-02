import { Modificador } from "./superclasse/modificador";

export class Aspas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("aspas", "quotes");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
