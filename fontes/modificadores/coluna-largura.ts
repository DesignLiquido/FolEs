import { Modificador } from "./superclasse/modificador";

export class ColunaLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-largura", "column-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
