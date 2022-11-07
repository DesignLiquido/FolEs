import { Modificador } from "./superclasse/modificador";

export class Recuo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo", "padding");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
