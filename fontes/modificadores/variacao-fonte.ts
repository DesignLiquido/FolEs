import { Modificador } from "./superclasse/modificador";

export class VariacaoFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["variacao-fonte", "variação-fonte"], "font-variant");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
