import { Modificador } from "./modificador";

export class FundoFiltro extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fundo-filtro", "backdrop-filter");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
