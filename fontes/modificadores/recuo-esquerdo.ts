import { Modificador } from "./superclasse/modificador";

export class RecuoEsquerdo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recuo-esquerdo", "padding-left");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
