import { Modificador } from "./superclasse/modificador";

export class VariacaoFonte extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["variacao-fonte", "variação-fonte"], "font-variant");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
