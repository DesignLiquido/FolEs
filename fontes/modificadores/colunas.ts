import { Modificador } from "./superclasse/modificador";

export class Colunas extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("colunas", "columns");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
