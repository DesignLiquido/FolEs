import { Modificador } from "./modificador";

export class FundoRepetir extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-repetir", "background-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
