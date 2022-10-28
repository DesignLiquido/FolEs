import { Modificador } from "./superclasse/modificador";

export class ColunaQuantidade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-quantidade", "column-count");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
