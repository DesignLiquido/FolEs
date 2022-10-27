import { Modificador } from "./modificador";

export class FundoOrigem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-origem", "background-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
