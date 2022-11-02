import { Modificador } from "./superclasse/modificador";

export class EspacamentoLinhas extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
