import { Modificador } from "./superclasse/modificador";

export class ModoEscrita extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modo-escrita", "writing-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
