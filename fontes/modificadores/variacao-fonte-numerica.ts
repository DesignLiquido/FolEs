import { Modificador } from "./superclasse/modificador";

export class VariacaoFonteNumerica extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["variacao-fonte-numerica", "variação-fonte-numérica"], 
            "font-variant-numeric"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
