import { Modificador } from "./superclasse/modificador";

export class Vazamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("vazamento", "overflow");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
