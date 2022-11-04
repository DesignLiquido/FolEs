import { Modificador } from "./superclasse/modificador";

export class PreencherColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("preencher-coluna", "column-fill");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
