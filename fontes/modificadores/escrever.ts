import { Modificador } from "./superclasse/modificador";

export class Escrever extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("escrever", "writing-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
