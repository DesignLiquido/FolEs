import { Modificador } from "./superclasse/modificador";

export class Fundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo", "background");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
