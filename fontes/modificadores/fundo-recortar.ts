import { Modificador } from "./superclasse/modificador";

export class FundoRecortar extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-recortar", "background-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
