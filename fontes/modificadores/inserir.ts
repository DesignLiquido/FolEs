import { Modificador } from "./superclasse/modificador";

export class Inserir extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("inserir", "inset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
