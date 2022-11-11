import { Modificador } from "./superclasse/modificador";

export class Espacamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["espacamento", "espaçamento"], "gap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
