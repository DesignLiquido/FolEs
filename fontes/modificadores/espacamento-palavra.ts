import { Modificador } from "./superclasse/modificador";

export class EspacamentoPalavras extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["espacamento-palavras", "espaçamento-palavras"], "word-spacing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
