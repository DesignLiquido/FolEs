import { Modificador } from "./modificador";

export class FundoCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-cor", "background-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
