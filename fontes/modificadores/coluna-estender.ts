import { Modificador } from "./superclasse/modificador";

export class ColunaEstender extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-estender", "column-span");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
