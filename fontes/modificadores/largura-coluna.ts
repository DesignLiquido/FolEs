import { Modificador } from "./superclasse/modificador";

export class LarguraColuna extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-coluna", "column-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
