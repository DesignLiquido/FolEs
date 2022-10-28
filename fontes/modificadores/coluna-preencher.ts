import { Modificador } from "./superclasse/modificador";

export class ColunaPreencher extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("coluna-preencher", "column-fill");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
