import { Modificador } from "./modificador";

export class FundoVisibilidade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-visibilidade", "backface-visibility");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
