import { Modificador } from "./superclasse/modificador";

export class Visibilidade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("visibilidade", "visibility");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
