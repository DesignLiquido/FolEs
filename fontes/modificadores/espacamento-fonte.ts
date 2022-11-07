import { Modificador } from "./superclasse/modificador";

export class EspacamentoFonte extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["espacamento-fonte", "espaçamento-fonte"], "font-kerning");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
